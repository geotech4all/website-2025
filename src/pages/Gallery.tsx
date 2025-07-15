import React from "react";
import GalleryGrid from "@/components/GalleryGrid";

const Gallery = () => {
  // Gallery images loaded from local system
  const galleryImages = [
    {
      id: "1",
      src: "./images/1.jpg",
      alt: "River between mountains under white clouds",
      category: "Fieldwork"
    },
    {
      id: "2",
      src: "./images/2.jpg",
      alt: "Landscape photography of mountain hit by sun rays",
      category: "Fieldwork"
    },
    {
      id: "3",
      src: "./images/3.jpg",
      alt: "GIS Training",
      category: "Training"
    },
    {
      id: "4",
      src: "./images/4.jpg",
      alt: "Trees near rocky mountain under blue skies",
      category: "Fieldwork"
    },
    {
      id: "5",
      src: "./images/5.jpg",
      alt: "Two brown deer beside trees and mountain",
      category: "Fieldwork"
    },
    {
      id: "6",
      src: "./images/6.jpg",
      alt: "People in a training session",
      category: "Training"
    },
    {
      id: "7",
      src: "./images/7.jpg",
      alt: "GIS Training",
      category: "Training"
    },
    {
      id: "8",
      src: "./images/8.jpg",
      alt: "Scientific conference presentation",
      category: "Events"
    },
    {
      id: "9",
      src: "./images/9.jpg",
      alt: "Map visualization",
      category: "Maps"
    },
    {
      id: "10",
      src: "./images/10.jpg",
      alt: "Map visualization",
      category: "Maps"
    },
    {
      id: "11",
      src: "./images/11.jpg",
      alt: "Map visualization",
      category: "Maps"
    },
    {
      id: "12",
      src: "./images/12.jpg",
      alt: "Conference networking event",
      category: "Training"
    }
  ];

  const categories = ["Fieldwork", "Training", "Maps", "Events"];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-geotech-black" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container-wide text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gray-300">
              Explore our collection of fieldwork, training sessions, visualizations, and events.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work in Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through images from our field activities, training sessions, project visualizations, and conference events.
            </p>
          </div>

          <GalleryGrid images={galleryImages} categories={categories} />
        </div>
      </section>
    </>
  );
};

export default Gallery;