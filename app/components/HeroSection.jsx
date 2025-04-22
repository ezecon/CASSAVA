import Image from "next/image";

export default function HeroSection() {
    return (
       <div
      id="herosection"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-24 gap-12"
    >
      {/* Animated Title */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">

      <div className="mt-10 text-center title-container flex gap-4 text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-white">
  <div className="flex flex-col items-center">
    <p className="letter slide-in-left z-10">C</p>
    <img src="/1.jpg" alt="P" className=" absolute w-[2.8ch] h-[3.2ch] object-cover mt-2" />
  </div>
  <div className="flex flex-col items-center">
    <p className="letter slide-in-top z-10">A</p>
    <img src="/2.jpg" alt="R" className=" absolute w-[2.8ch] h-[3.2ch] object-cover" />
  </div>
  <div className="flex flex-col items-center">
    <p className="letter slide-in-right z-10">S</p>
    <img src="/3.jpg" alt="I" className=" absolute w-[2.8ch] h-[3.2ch] object-cover" />
  </div>
  <div className="flex flex-col items-center">
    <p className="letter slide-in-bottom z-10">E</p>
    <img src="/4.jpg" alt="O" className=" absolute w-[2.8ch] h-[3.2ch] object-cover" />
  </div>
  <div className="flex flex-col items-center">
    <p className="letter fade-in z-10">V</p>
    <img src="/1.jpg" alt="M" className=" absolute w-[2.8ch] h-[3.2ch] object-cover" />
  </div>
</div>

      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left max-w-2xl">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-4">
          CASSAVA<span className="text-[goldenrod]"> DETECTION</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
          A Doctor/ General Practitioner (GP) also known as a Family Physician,{" "}
          <span className="text-[goldenrod] font-semibold">
            cares for patients of all ages,
          </span>{" "}
          treats acute and chronic illnesses, provides preventive care, and also provides
          health education
        </p>
        <button type="button" className="mt-4 btn">
        <strong>Learn More</strong>
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
    );
  }
  