import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { Work } from './types';

interface WorkSlideProps {
  work: Work;
  isActive: boolean;
  direction: 'active' | 'inactive';
}

export default function WorkSlide({ work, isActive, direction }: WorkSlideProps) {
  const slideClasses = {
    active: 'translate-x-0 opacity-100',
    inactive: 'translate-x-full opacity-0'
  };

  return (
    <div
      className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${slideClasses[direction]}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="relative overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
          />
          {work.award && (
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <Award className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-gray-900">{work.award}</span>
            </div>
          )}
        </div>

        <div className="bg-white p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <span className="text-indigo-600 font-medium">{work.category}</span>
            <h3 className="mt-2 text-3xl font-bold text-gray-900">{work.title}</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">{work.description}</p>
            
            <div className="mt-6 space-y-4">
              {work.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-600 mt-2" />
                  <p className="text-gray-600">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <a
              href={work.link}
              className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
            >
              View Full Project <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}