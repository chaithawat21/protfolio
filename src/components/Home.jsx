import React from 'react'
import ReactPlayer from 'react-player'


function Home() {
    return (
        <section id="Home" className='flex flex-col justify-center items-center pb-[8rem]'>
            <h1 className='text-[4rem] font-[200]  py-[4rem]'>Chaithawat Pinsuwan</h1>

            <ReactPlayer
                url="https://vimeo.com/1013053963"
                width="100%"
                height="480px"
                controls
                title="REEL 2024"
            />



        </section>
    )
}

export default Home