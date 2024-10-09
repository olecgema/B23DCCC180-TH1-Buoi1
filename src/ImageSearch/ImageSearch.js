// src/ImageSearch/ImageSearch.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ImageSearch = () => {
  const [query, setQuery] = useState('');
  const [showImages, setShowImages] = useState(false);
  const images = useSelector(state => state.imageSearch.images);
  const dispatch = useDispatch();

  const fetchImages = (searchQuery) => {
    fetch(`https://pixabay.com/api/?key=46166847-40e887f0f1cbd269c98d3b401&q=${searchQuery}&image_type=photo`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_IMAGES', payload: data.hits });
      })
      .catch(error => console.error('Error fetching images:', error));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages(query); 
    setShowImages(true);
  };

  return (
    <div>
      <h2>Image Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Enter search keyword"
        />
        <button type="submit">Search</button>
      </form>

      <button onClick={() => setShowImages(!showImages)}>Show</button>

      {showImages && images.length > 0 && (
        <div>
          {images.map((image) => (
            <img key={image.id} src={image.webformatURL} alt={image.tags} style={{ width: '200px', margin: '10px' }} />
          ))}
        </div>
      )}
      
      {showImages && images.length === 0 && <p>Không tìm được dữ liệu</p>}
    </div>
  );
};

export default ImageSearch;
