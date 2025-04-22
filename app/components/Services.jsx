"use client";

export default function Services() {


  return (
    <div id="services" className=" text-white min-h-screen py-20 px-4 md:px-10 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[goldenrod] drop-shadow-md">
          SERVICES
        </h1>
    
      </div>

      <div className=" flex  flex-row sm:flex-col justify-center items-center  gap-4">
            <div class="card">

            <img src="/1.jpg" className="w-full h-full object-cover" alt="" />
            <p className="text-center font-bold font-mono">Image Detection</p>
              <button type="button" className="mt-4 btn">
              <strong>Explore</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
            </div>
            <div class="card">

            <img src="/1.jpg" className="w-full h-full object-cover" alt="" />
            <p className="text-center font-bold font-mono">Drone</p>
              <button type="button" className="mt-4 btn">
              <strong>Explore</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
            </div>
      </div>
    </div>
  );
}
