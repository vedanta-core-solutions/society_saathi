import Image from 'next/image';

export default function Home() {
  const sidebar=['Home','Profile','About us','Contact us'];

  return (
    <>
    <header className="bg-blue-500 text-white p-4">

    </header>
    <aside className="w-64 bg-gray-200 p-4">


      </aside>
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Our Bafna Iris Society 🏠</h1>
      <p className="mt-4 text-lg text-gray-700">
     A small group of thoughtful, committed citizens can change the world
      </p>
    </main>
    <footer>

    </footer>
    
    
    
    
    
    
    </>
  );
}
