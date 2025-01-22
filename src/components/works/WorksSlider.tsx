import React from 'react';

// Replace these imports with the actual paths to your images
import illustratorImage from "../works/illustrator-logo.svg";
import photoshopImage from "../works/Photoshop-logo.png";
import chatGPTImage from "../works/chatgpt-logo.jpg";
import sketchImage from "../works/chatgpt-logo.jpg";

// Mock images for Before and After sections (replace with actual paths)
import beforeImage from '../works/before.jpg';
import afterImage from '../works/after.jpg';

export default function Portfolio() {
  return (
    <div>
      {/* Before and After Transformations */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Before & After Transformations</h2>
          <p className="mt-4 text-lg text-gray-600">See how I take a concept and transform it into something beautiful.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src={beforeImage} alt="Before Transformation" className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Before</h3>
              <p className="text-gray-600 mt-2">This is how it started...</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src={afterImage} alt="After Transformation" className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">After</h3>
              <p className="text-gray-600 mt-2">And here's the final result!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">My Design Process</h2>
          <p className="mt-4 text-lg text-gray-600">From concept to completion, here's how I work</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {['Discovery', 'Design', 'Finalization'].map((step, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{index + 1}. {step}</h3>
                <p className="mt-4 text-gray-600">
                  {index === 0 && 'I start by understanding your goals, audience, and vision.'}
                  {index === 1 && 'I create initial design concepts for you to review and provide feedback.'}
                  {index === 2 && 'I refine the design and prepare everything for delivery.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Tools & Skills I Use</h2>
          <p className="mt-4 text-lg text-gray-600">I use industry-standard tools to bring your vision to life.</p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {[ 
              { img: illustratorImage, title: 'Adobe Illustrator' },
              { img: photoshopImage, title: 'Adobe Photoshop' },
              { img: chatGPTImage, title: 'ChatGPT' },
              { img: sketchImage, title: 'Sketch' }
            ].map((tool, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <img src={tool.img} alt={tool.title} className="w-16 h-16 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{tool.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
