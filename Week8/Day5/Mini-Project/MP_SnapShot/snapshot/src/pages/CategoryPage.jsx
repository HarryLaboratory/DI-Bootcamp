import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from '../components/ImageGallery';

function CategoryPage({ category }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Track total pages

  useEffect(() => {
    // to make the request to the correct endpoint
    axios.get(`https://api.pexels.com/v1/search?query=${category}&per_page=30&page=${page}`, {
      headers: {
        Authorization: 'EsbVJ1JZNhfMsfLQI4IkH1hyDqU7HRGPfW4izQySISOlPvTijHM7462f', // API Key
      },
    })
    .then((response) => {
      setImages(response.data.photos);
      setTotalPages(Math.ceil(response.data.total_results / 30));  // to calculate total pages
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
  }, [category, page]); // to run effect on category or page change

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Images</h1>
      <ImageGallery images={images} />
      
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default CategoryPage;



