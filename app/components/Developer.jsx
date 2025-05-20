import Image from "next/image";


export default function Developers() {
  
    return (
      <div id="dev" className="mb-60 py-20 h-full rounded-2xl">
        <h1 className=" text-center text-3xl md:text-4xl lg:text-5xl my-10 text-[goldenrod] drop-shadow-md">
            DEVELOPERS
        </h1>
   

        <div>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              <div className="flex flex-col items-center">
                <Image
                  src="./econ.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="border-4 border-[goldenrod] rounded-full"
                />
                <h1 className="text-[goldenrod] font-mono text-2xl">Md. Econozzaman</h1>
                <p className="text-white">Bangladesh University of Professionals</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/econ.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="border-4 border-[goldenrod] rounded-full"
                />
                <h1 className="text-[goldenrod] font-mono text-2xl">Nishat Tasnim</h1>
                <p className="text-white">Bangladesh University of Professionals</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/econ.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="border-4 border-[goldenrod] rounded-full"
                />
                <h1 className="text-[goldenrod] font-mono text-2xl">Sristy</h1>
                <p className="text-white">Bangladesh University of Professionals</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/econ.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="border-4 border-[goldenrod] rounded-full"
                />
                <h1 className="text-[goldenrod] font-mono text-2xl">Sumiya</h1>
                <p className="text-white">Bangladesh University of Professionals</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/econ.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="border-4 border-[goldenrod] rounded-full"
                />
                <h1 className="text-[goldenrod] font-mono text-2xl">Rubaiya</h1>
                <p className="text-white">Bangladesh University of Professionals</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    )
  }
  