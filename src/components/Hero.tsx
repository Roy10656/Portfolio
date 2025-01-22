import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Crafting Digital
              <span className="text-indigo-600"> Experiences</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Hi, I'm Roy. I transform ideas into stunning visual experiences. 
              Let's create something amazing together.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1470"
              alt="Designer workspace"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-gray-900">2+ Years Experience</p>
              <p className="text-gray-600">in Freelance Digital Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}