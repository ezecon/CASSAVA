'use client';
import { useState } from "react";

const galleryData = [
  {
    label: "Healthy",
    images: [
      { imageLink: "1.jpg" },
      { imageLink: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?..." },
      { imageLink: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?..." },
      { imageLink: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" },
      { imageLink: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" },
      { imageLink: "https://images.unsplash.com/photo-1620064916958-605375619af8?..." },
    ],
  },
  {
    label: "Brown Streak Disease",
    images: [
      { imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?..." },
      { imageLink: "https://images.unsplash.com/photo-1432462770865-65b70566d673?..." },
      { imageLink: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?..." },
      { imageLink: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?..." },
      { imageLink: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?..." },
      { imageLink: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?..." },
    ],
  },
  {
    label: "Green Mottle",
    images: [
      { imageLink: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?..." },
      { imageLink: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?..." },
      { imageLink: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?..." },
      { imageLink: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" },
      { imageLink: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" },
      { imageLink: "https://images.unsplash.com/photo-1620064916958-605375619af8?..." },
    ],
  },
  {
    label: "Bacterial Blight",
    images: [
      { imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?..." },
      { imageLink: "https://images.unsplash.com/photo-1432462770865-65b70566d673?..." },
      { imageLink: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?..." },
      { imageLink: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?..." },
      { imageLink: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?..." },
      { imageLink: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?..." },
    ],
  },
  {
    label: "Mosaic Disease",
    images: [
      { imageLink: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" },
      { imageLink: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" },
      { imageLink: "https://images.unsplash.com/photo-1620064916958-605375619af8?..." },
    ],
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("Healthy");

  const currentTab = galleryData.find(tab => tab.label === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h1 className=" text-center text-3xl md:text-4xl lg:text-5xl my-10 text-[goldenrod] drop-shadow-md">
            GALLERY
        </h1>
      {/* Tabs Header */}
      <div className="flex flex-wrap gap-2 justify-center mb-6 mt-20">
        {galleryData.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === tab.label
                ? "bg-[goldenrod] text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentTab?.images.map((img, idx) => (
          <div key={idx} className="w-full overflow-hidden rounded-lg shadow-md">
            <img
              src={img.imageLink}
              alt={`Gallery ${idx}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
