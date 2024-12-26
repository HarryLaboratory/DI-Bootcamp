import { useState } from 'react';
import axios from 'axios';
import ImageGallery from '../components/ImageGallery';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = () => {
    if (query.trim() === '') {
      return; // to prevent search if query is empty
    }

    axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=30&page=${page}`, {
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
  };

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
      <input
        type="text"
        placeholder="Search for images"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {images.length > 0 && <ImageGallery images={images} />}
      
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default SearchPage;



