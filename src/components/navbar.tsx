"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
        setIsScrolled(currentScrollPos > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);


    return (
        <nav className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 
                        ${visible ? 'translate-y-0' : '-translate-y-full'}
                        ${isScrolled ? 'bg-primary/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}

        `}>
            <div className="margin h-18 flex items-center justify-between">

                {/* Left - Logo */}
                <div className="flex items-center">
                    <Image
                        width={50}
                        height={50}
                        src="/logobnw.png"
                        alt="Logo"
                        className="h-10 w-22 object-cover invert"
                    />
                </div>

                {/* Center - Menu (Desktop) */}
                <div className="hidden md:flex gap-8 text-[16px] font-medium text-white">
                    <a href="#" className="hover:text-blue-600 transition">Home</a>
                    <a href="#" className="hover:text-blue-600 transition">About</a>
                    <a href="#" className="hover:text-blue-600 transition">Services</a>
                    <a href="#" className="hover:text-blue-600 transition">Contact</a>
                </div>

                {/* Right - Contact Button (Desktop) */}
                <div className="hidden md:flex">
                    <Button
                    className={`${isScrolled ? 'bg-white text-primary hover:bg-gray-100' : ''}`}
                    >
                        Contact Us
                    </Button>
                </div>

                {/* Mobile - Hamburger */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white shadow-md">
                    <a href="#" className="py-2 border-b">Home</a>
                    <a href="#" className="py-2 border-b">About</a>
                    <a href="#" className="py-2 border-b">Services</a>
                    <a href="#" className="py-2 border-b">Contact</a>

                    <a
                        href="#"
                        className="mt-2 text-center px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Contact Us
                    </a>
                </div>
            )}
        </nav>
    );
};