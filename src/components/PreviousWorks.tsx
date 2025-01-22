import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const featuredWorks = [
  {
    title: "Eco-friendly Brand Redesign",
    client: "GreenLife Co.",
    year: "2023",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&q=80&w=1476",
    description: "Complete brand overhaul focusing on sustainable design principles",
    stats: { satisfaction: "100%", timeframe: "6 weeks", elements: "50+" }
  },
  {
    title: "Tech Startup Website",
    client: "InnovateTech",
    year: "2023",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1515",
    description: "Modern, responsive website with interactive elements",
    stats: { satisfaction: "98%", timeframe: "8 weeks", elements: "30+" }
  },
  {
    title: "Luxury Fashion Campaign",
    client: "Elite Fashion",
    year: "2022",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1470",
    description: "High-end fashion marketing campaign across multiple platforms",
    stats: { satisfaction: "100%", timeframe: "12 weeks", elements: "75+" }
  }
];

export default function PreviousWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Previous Works</h2>
          <p className="mt-4 text-xl text-gray-600">Showcasing some of my most impactful projects</p>
        </div>

        <div className="space-y-24">
          {featuredWorks.map((work, index) => (
            <div key={index} className="group">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <p className="text-sm font-medium text-gray-900">{work.year}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <p className="text-indigo-600 font-medium">{work.category}</p>
                    <h3 className="mt-2 text-3xl font-bold text-gray-900">{work.title}</h3>
                    <p className="mt-2 text-lg text-gray-600">Client: {work.client}</p>
                  </div>

                  <p className="text-gray-600 text-lg">{work.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Client Satisfaction</p>
                      <p className="text-lg font-bold text-indigo-600 flex items-center gap-1">
                        {work.stats.satisfaction}
                        <Star className="h-4 w-4 fill-current" />
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Timeframe</p>
                      <p className="text-lg font-bold text-indigo-600">{work.stats.timeframe}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Design Elements</p>
                      <p className="text-lg font-bold text-indigo-600">{work.stats.elements}</p>
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700">
                    View Case Study <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}