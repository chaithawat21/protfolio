import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-scroll'


function Header() {
    const [showTitle, setShowTitle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollPercentage = (scrollPosition / document.body.scrollHeight) * 100;

            // Show <h1> if scrolled down 20% of the page
            if (scrollPercentage >= 2) {
                setShowTitle(true);
            } else {
                setShowTitle(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className='sticky z-20 top-0 shadow-md bg-black bg-opacity-95'>
                                {/* Conditionally render <h1> based on scroll */}
                                {showTitle && <h1 className={`text-white absolute left-[2rem] sm:left-[1rem] py-[.5rem] ${isOpen ? "hidden" : "block"}`}>Chaithawat Pinsuwan</h1>}
                                {/* <h1 className={`text-white absolute left-[2rem] sm:left-[1rem] py-[.5rem] ${isOpen ? "hidden" : "block"}`}>Chaithawat Pinsuwan</h1> */}
            <nav >

                <ul className='text-white flex flex-row justify-end gap-[2rem] px-[2rem] py-[.5rem]  z-20 top-0 sm:h-[2.5rem] md:h-[2.5rem]'>

                    <li className='cursor-pointer md:hidden sm:hidden'>
                        <Link activeClass="active" smooth spy to="Home">
                            Home
                        </Link>
                    </li>
                    <li className='cursor-pointer md:hidden sm:hidden'>
                        <Link activeClass="active" smooth spy to="Projects">
                            Projects
                        </Link>
                    </li>
                    <li className='cursor-pointer md:hidden sm:hidden'>
                        <Link activeClass="active" smooth spy to="About">
                            About
                        </Link>
                    </li>
                    <li className='cursor-pointer md:hidden sm:hidden'>
                        <Link activeClass="active" smooth spy to="Contact">
                            Contact
                        </Link>
                    </li>

                </ul>
                <div
                        className={` space-y-2 hidden cursor-pointer absolute right-[2rem] top-[.5rem]  ${isOpen ? "hidden" : "md:block sm:block" }`}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-6  bg-white"></span>
                        <span className="block h-0.5 w-6  bg-white"></span>
                        <span className="block h-0.5 w-6  bg-white"></span>
                    </div>


               {/* Mobile menu */}
               <div className={`  ${isOpen ? "block" : "hidden"}`}>
                    <div
                        className="absolute top-0 right-0 px-7 pt-1 cursor-pointer "
                        onClick={() => setIsOpen(false)}
                    >
                        <svg
                            className="h-8 w-8 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <ul className="text-white flex flex-col items-center justify-start gap-[4rem] pt-[2rem] h-screen">
                        <li className="cursor-pointer">
                            <Link activeClass="active" smooth spy to="Home" offset={-900} onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link activeClass="active" smooth spy to="Projects" offset={-750} onClick={() => setIsOpen(false)}>
                                Projects
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link activeClass="active" smooth spy to="About" offset={-700} onClick={() => setIsOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link activeClass="active" smooth spy to="Contact" offset={-800} onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>


        </header>
    )
}

export default Header