import React from "react";
import useOnScreen from "./hook"; // adjust path as needed
// your other imports...

export default function About() {
  const [ref, isVisible] = useOnScreen(0.2);

  return (
    <div
      id="about"
      ref={ref}
      className={`min-h-screen py-24 px-4 md:px-10 lg:px-20 text-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[goldenrod]">
          ABOUT
        </h1>
        <p className="text-sm md:text-base text-gray-300 mt-2">
          Know the disease
        </p>
      </div>

      {/* Bio Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Box */}
        <div className="w-[290px] h-[254px] mx-auto bg-[#011522] rounded-lg z-[1]">
          <div className="flex items-center p-[9px]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff605c] mx-[4px]"></span>
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd44] mx-[4px]"></span>
            <span className="w-[10px] h-[10px] rounded-full bg-[#00ca4e] mx-[4px]"></span>
          </div>
          <div className="p-4 text-white font-mono">
            const class = [ `mosaic`, `green mottle`,`healthy`, `bacterial blight`, `brown streak` ]
          </div>
        </div>

        {/* Right Text */}
        <div className="prose prose-invert max-w-none text-gray-300">
          <h2 className="text-3xl font-semibold">
            <span className="text-[goldenrod]">Cassava</span> Leaf
          </h2>
          <p className="mt-4 text-sm font-mono ">
          Cassava leaves are green, palmate-shaped, and essential indicators of plant health. They are rich in nutrients and sometimes consumed as a leafy vegetable. One major disease is **Cassava Mosaic Disease (CMD)**, which causes yellow-green mottling and stunted growth. **Cassava Bacterial Blight (CBB)** leads to water-soaked leaf spots, wilting, and gum exudates on stems. **Cassava Anthracnose Disease (CAD)** causes dark lesions on leaves and stems, often leading to shoot dieback. **Cassava Brown Leaf Spot (CBLS)** presents as brown, circular spots that may merge and damage large areas of the leaf. **Cassava Green Mite Damage** is another issue, where mites cause yellowing, curling, and drying of leaves. These diseases can severely reduce cassava yield and quality. Control methods include using disease-free cuttings, resistant varieties, and good field sanitation. Early detection through leaf symptoms is crucial for managing cassava diseases effectively.
          </p>
        </div>
      </div>
    </div>
  );
}
