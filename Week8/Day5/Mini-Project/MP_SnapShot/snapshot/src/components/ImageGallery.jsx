function ImageGallery({ images }) {
    return (
      <div className="image-gallery">
        {images.map((image) => (
          <div className="image-container" key={image.id}>
            <img src={image.src.medium} alt={image.alt} />
            <div className="image-overlay">Click to enlarge</div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ImageGallery;
  