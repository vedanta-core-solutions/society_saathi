"use client";
export default function Main() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-0 m-0">
      <div className="w-full h-screen flex flex-col items-center justify-center relative p-0 m-0">
        <video
          src="video.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold mb-2 text-center text-black bold drop-shadow-lg">Welcome to Society Saathi</h1>
          <p className="text-lg text-black b mb-8 text-center drop-shadow-lg">
            Your trusted partner in community management.
          </p>
          <div className="flex gap-4 mb-4">
            <button className="bg-white-500 text-black px-4 py-2 rounded hover:bg-blue-600" onClick={'#'}> 
              Request a demo
            </button>
            <button className="bg-white-600 text-black px-6 py-2 rounded hover:bg-blue-600" onClick={'#'}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
