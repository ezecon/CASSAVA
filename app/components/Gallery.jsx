import Image from "next/image";


export default function Gallery() {
  
    return (
      <div id="gallery" className="mb-60 py-20 h-full rounded-2xl">
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl text-center m-10">
              Gallery
        </h1>
        <div className="discount autoShow">
        <div className="img-container ">
          <Image src="/sl-1.png" width={500} height={500} alt="Discount 1" />
        </div>
        <div className="img-container ">
          <Image src="/sl-1.png" width={500} height={500} alt="Discount 1" />
        </div>
        <div className="img-container ">
          <Image src="/sl-1.png" width={500} height={500} alt="Discount 1" />
        </div>
        <div className="img-container ">
          <Image src="/sl-1.png" width={500} height={500} alt="Discount 1" />
        </div>
        <div className="img-container ">
          <Image src="/sl-1.png" width={500} height={500} alt="Discount 1" />
        </div>
        <div className="img-container ">
          <Image src="/sl-1.png" width={500} height={500} alt="Discount 1" />
        </div>
        <div className="img-container ">
          <Image src="/sl-1.png" width={500} height={500} alt="Discount 1" />
        </div>
      </div>
      </div>
    )
  }
  