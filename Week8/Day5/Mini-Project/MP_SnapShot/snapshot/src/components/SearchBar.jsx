import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for images"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // to update the query state
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
