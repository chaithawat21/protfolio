import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-scroll'

function Header() {
        // State to show/hide the <h1>Chai</h1>
        const [showTitle, setShowTitle] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                const scrollPercentage = (scrollPosition / document.body.scrollHeight) * 100;
                
                // Show <h1>Chai</h1> if scrolled down 20% of the page
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
        <header className='sticky z-20 top-0 shadow-md bg-white'>
            <nav >
                
                <ul className='flex flex-row justify-end gap-[2rem] px-[2rem] py-[.5rem]  z-20 top-0 '>
                    {/* Conditionally render <h1>Chai</h1> based on scroll */}
                {showTitle && <h1 className="absolute left-[2rem]">Chaithawat Pinsuwan</h1>}
                    <li className='cursor-pointer'>
                        <Link activeClass="active" smooth spy to="Home">
                            Home
                        </Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link activeClass="active" smooth spy to="Projects">
                            Projects
                        </Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link activeClass="active" smooth spy to="About">
                            Resume
                        </Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link activeClass="active" smooth spy to="Contact">
                            Contact
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header