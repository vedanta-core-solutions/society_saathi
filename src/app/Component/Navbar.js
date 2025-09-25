"use client";

import { useState } from 'react';
export default function Navbar() {
  const sidebar = ['Home', 'Features', 'Pricing', 'About Us', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');
    const toggleSidebar = () => {
    setIsOpen(!isOpen);
    }
  return (
    <>
    <nav className="max-w-auto bg-gray-800 text-white p-4
    flex justify-between items-center">
<div className="flex items-center gap-2">
                <a href="#">
                  <img  src="/S.webp"
                        alt="Society Saathi logo featuring stylized S with accompanying text Society Saathi, set against a clean background, conveying a welcoming and professional tone"
                        className="h-10 w-10"
                    />
                </a>
                <a href="#" className="text-x">Society Saathi</a>
            </div>
        
        <ul className="flex space-x-4">
         
{sidebar.map((page, keys) => (
  <li key={keys} className="hover:underline cursor-pointer"
  onClick={()=>setCurrentPage(page)}>{page}</li>
))}
 <button onClick={toggleSidebar}>☰</button>
        </ul>
            
      </nav>
      <h2 className="text-center text-3xl mt-3">Welcome to {currentPage}</h2>
  
    </>
  );
}
