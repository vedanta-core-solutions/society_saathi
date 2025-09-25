import React from 'react'
export default function Header() {
return (
    <>
        <header className="bg--500 text-white p-4">
            <div className="flex items-center gap-2">
                <a href="#">
                    <img
                        src="/S.webp"
                        alt="Society Saathi logo featuring stylized S with accompanying text Society Saathi, set against a clean background, conveying a welcoming and professional tone"
                        className="h-10 w-10"
                    />
                </a>
                <a href="" className="text-white">
                    <span>🌐Society Saathi</span>
                </a>
            </div>
        </header>
    </>
);
}
