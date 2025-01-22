import React from "react"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import poster images for social media posters
import work1Image from "../components/works/work1.jpg";
import work2Image from "../components/works/work2.jpg";
import work3Image from "../components/works/work3.jpg";
import work4Image from "../components/works/work4.png";
import work5Image from "../components/works/work5.jpg";
import work6Image from "../components/works/work6.png";
import work7Image from "../components/works/work7.jpg";
import work8Image from "../components/works/work8.jpg";

// Import thumbnail images for YouTube
import thumb1 from "../components/works/thumb1.jpg";
import thumb2 from "../components/works/thumb2.jpg";
import thumb3 from "../components/works/thumb3.jpg";
import thumb4 from "../components/works/thumb4.jpg";

// Import web design banner images
import webDesign1 from "../components/works/webDesign1.png";
import webDesign2 from "../components/works/webDesign2.png";
import webDesign3 from "../components/works/webDesign3.png";

// Poster images array for social media posters
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

// Thumbnail images array for YouTube
const thumbnails = [thumb1, thumb2, thumb3, thumb4];

// Web design banner images array
const webDesignBanners = [webDesign1, webDesign2, webDesign3];

export default function Portfolio() {
  const settings = {
    dots: false,
    infinite: true,  // Enable infinite sliding for continuous loop
    speed: 4000, // Reduced transition speed (in ms)
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous autoplay with no delay
    cssEase: "linear", // Ensures constant movement without interruption
    arrows: false,
    pauseOnHover: false, // Disable pause on hover to keep it continuous
    lazyLoad: "ondemand", // Lazy load images as they come into view
    variableWidth: true, // Use dynamic slide width to avoid layout shifts
    centerMode: true, // Center the active slide for better visual appeal
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablets
      { breakpoint: 640, settings: { slidesToShow: 1 } },  // Mobile
    ],
  };

  return (
    <div>
      {/* Social Media Posters Section */}
      <section
        id="social-media-posters"
        className="py-12 bg-gray-100 mx-2 sm:mx-4 lg:mx-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Social Media Poster Designs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A showcase of my most creative and modern poster designs.
            </p>
          </div>

          <Slider {...settings}>
            {posters.map((src, index) => (
              <div key={`poster-${index}`} className="px-2">
                <div className="h-[200px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-200">
                  <img
                    src={src}
                    alt={`Poster Design ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"  // Implement lazy loading
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* YouTube Thumbnail Designs Section */}
      <section
        id="youtube-thumbnail-designs"
        className="py-12 bg-gray-100 mx-2 sm:mx-4 lg:mx-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              YouTube Thumbnail Designs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A showcase of my creative and engaging YouTube thumbnail designs.
            </p>
          </div>

          <Slider {...settings}>
            {thumbnails.map((src, index) => (
              <div key={`thumbnail-${index}`} className="px-2">
                <div className="h-[200px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-200">
                  <img
                    src={src}
                    alt={`Thumbnail Design ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"  // Implement lazy loading
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Web Design Banners Section */}
      <section
        id="web-design-banners"
        className="py-12 bg-gray-100 mx-2 sm:mx-4 lg:mx-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Web Design Banners
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A collection of my best web design banners that combine creativity and functionality.
            </p>
          </div>

          <Slider {...settings}>
            {webDesignBanners.map((src, index) => (
              <div key={`web-design-${index}`} className="px-2">
                <div className="h-[200px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-200">
                  <img
                    src={src}
                    alt={`Web Design Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"  // Implement lazy loading
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
