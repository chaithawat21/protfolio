import React from 'react'
import ReactPlayer from 'react-player'


function Home() {
    return (
        <section id="Home" className='flex flex-col justify-center items-center pb-[8rem] md:pb-[4rem] bg-gradient-to-b from-gray-200 to-gray-50 '>
            <h1 className='text-[4rem] font-[300] py-[4rem] sm:text-[2rem] sm:py-[2rem] sm:pt-[4rem]'>Chaithawat Pinsuwan</h1>

            <div className="  sm:h-[211px] md:h-[20rem] w-full h-[30rem]  relative px-[1rem] sm:px-0 ">
                <ReactPlayer
                    url="https://vimeo.com/1013053963"
                    width="100%"
                    height="100%" 
                    controls
                    title="REEL 2024"
                />
            </div>

        </section>
    )
}

export default Home