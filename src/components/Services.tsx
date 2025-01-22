import React from 'react';
import { Palette, Layout, PenTool, Smartphone, Image, Film } from 'lucide-react';

const services = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Brand Identity",
    description: "Creating unique and memorable brand identities that resonate with your target audience."
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Web Design",
    description: "Designing beautiful and functional websites that deliver exceptional user experiences."
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Print Design",
    description: "Crafting stunning print materials from business cards to billboards."
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces for web and mobile applications."
  },
  {
    icon: <Image className="h-8 w-8" />,
    title: "Social Media",
    description: "Designing eye-catching social media graphics that drive engagement."
  },
  {
    icon: <Film className="h-8 w-8" />,
    title: "Motion Graphics",
    description: "Bringing designs to life with stunning animations and motion graphics."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive design solutions for your business</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-indigo-600">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}