import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import thumbnail images
import thumb1 from "../components/works/thumb1.jpg";
import thumb2 from "../components/works/thumb2.jpg";
import thumb3 from "../components/works/thumb3.jpg";
import thumb4 from "../components/works/thumb4.png";
import thumb5 from "../components/works/thumb5.jpg";
import thumb6 from "../components/works/thumb6.png";

// Thumbnail images array
const thumbnails = [
  thumb1,
  thumb2,
  thumb3,
  thumb4,
  thumb5,
  thumb6,
];

export default function YouTubeThumbnailDesigns() {
  const settings = {
    dots: false,
    infinite: true, // Enable infinite sliding
    speed: 6000, // Slow and smooth transition speed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous autoplay with no delays
    cssEase: "linear", // Ensures smooth and constant movement
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablets
      { breakpoint: 640, settings: { slidesToShow: 1 } },  // Mobile
    ],
  };

  return (
    <section id="youtube-thumbnail-designs" className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            YouTube Thumbnail Designs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A showcase of my creative and engaging YouTube thumbnail designs.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {thumbnails.map((src, index) => (
            <div key={index} className="px-2">
              <div className="w-full h-[250px] rounded-lg overflow-hidden shadow-lg bg-gray-200">
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
