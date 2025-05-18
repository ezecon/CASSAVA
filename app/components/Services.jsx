"use client";
import Link from "next/link";
import useOnScreen from "./hook"; 

export default function Services() {
const [ref, isVisible] = useOnScreen(0.2);

  return (
    <div id="services" ref={ref} 
    className={`min-h-screen py-20 px-4 md:px-10 lg:px-16 text-white transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[goldenrod] drop-shadow-md">
          SERVICES
        </h1>
    
      </div>

      <div className=" flex  flex-row sm:flex-col justify-center items-center  gap-4">
            <div className="card">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1rnjGEw10B1HtA2nGeoxmbn_MvuUOFzEfw&s" className="w-full h-full object-cover" alt="" />
            <p className="text-center font-bold font-mono">Image Detection</p>
               <Link href={`detection`}><button type="button" className="mt-4 btn">
              <strong>Explore</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button></Link>
            </div>
            <br />
            <div className="card">

            <img src="https://hips.hearstapps.com/hmg-prod/images/pop-drones-67ae01c11a8ea.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*" className="w-full h-full object-cover" alt="" />
            <p className="text-center font-bold font-mono">Drone</p>
              <Link href={`drone`}><button type="button" className="mt-4 btn">
              <strong>Explore</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button></Link>
            </div>
      </div>
    </div>
  );
}
