import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Travel Destinations</h1>
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
        >
          {/* Hong Kong Slide */}
          <div>
            <img src="https://www.hongkongvoorbeginners.nl/wp-content/uploads/sites/2/2019/01/hongkongvoorbeginners2-1000x477.jpg" alt="Hong Kong" />
            <p className="legend">Hong Kong</p>
          </div>
          {/* Macao Slide */}
          <div>
            <img src="https://visasnews.com/wp-content/uploads/2022/09/macao-reouverture-frontieres-quarantaine-voyage-tourisme.webp" alt="Macao" />
            <p className="legend">Macao</p>
          </div>
          {/* Japan Slide */}
          <div>
            <img src="https://vie.businessfrance.fr/wp-content/uploads/2024/09/Japon-scaled.jpeg" alt="Japan" />
            <p className="legend">Japan</p>
          </div>
          {/* Las Vegas Slide */}
          <div>
            <img src="https://www.visittheusa.fr/sites/default/files/styles/hero_l/public/images/hero_media_image/2023-07/d8b99faa-dca0-4523-aa39-b2d7ee2b91f7_1.jpeg?h=2203e8f6&itok=F1zwF0wk" alt="Las Vegas" />
            <p className="legend">Las Vegas</p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default App;

