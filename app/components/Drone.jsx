'use client";'
export default function Drone() {
  return (
    <div className="w-full h-screen ">
        <h1 className="mt-20 text-center p-10 text-[goldenrod] font-mono font-bold text-3xl">Detect With Drone</h1>
      <div className="lg:w-3/5 h-screen flex justify-center items-center p-10 mx-auto">
            <iframe
            src="http://127.0.0.1:8000/"
            className="w-full h-full"
            title="Drone Stream"
        ></iframe>
      </div>
    </div>
  );
}
