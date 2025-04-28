import Image from "next/image";


export default function Developers() {
  
    return (
      <div id="dev" className="mb-60 py-20 h-full rounded-2xl">
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl text-center m-10">
            Developers
        </h1>
         
      <div className="mt-10 text-center title-container flex gap-4 text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-white">
        <div className="flex flex-col items-center">
          <p className="text-sm absolute z-40 text-center  pt-4 font-mono font-light ">Md. Econozzaman</p>
          <p className="text-sm absolute z-40 text-center  pt-8 font-mono font-light ">MCSE-25</p>
          <p className="text-sm absolute z-40 text-center  pt-12 font-mono font-light ">BUP</p>
          <p className="letter-dev slide-in-left z-10">.</p>
          <img src="/econ.jpg" alt="P" className=" absolute w-[7ch] h-[6.8ch] object-cover mt-2" />
        </div>
      </div>
      </div>
    )
  }
  