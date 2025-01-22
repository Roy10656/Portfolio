import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import poster images
import work1Image from "../components/works/work1.jpg";
import work2Image from "../components/works/work2.jpg";
import work3Image from "../components/works/work3.jpg";
import work4Image from "../components/works/work4.png";
import work5Image from "../components/works/work5.jpg";
import work6Image from "../components/works/work6.png";
import work7Image from "../components/works/work7.jpg";
import work8Image from "../components/works/work8.jpg";

// Poster images array
const posters = [
  work1Image,
  work2Image,
  work3Image,
  work4Image,
  work5Image,
  work6Image,
  work7Image,
  work8Image,
];

export default function SocialMediaPosters() {
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
    <section id="social-media-posters" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Social Media Poster Designs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A showcase of my most creative and modern poster designs.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {posters.map((src, index) => (
            <div key={index} className="px-2">
              <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-200">
                <img
                  src={src}
                  alt={`Poster ${index + 1}`}
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
