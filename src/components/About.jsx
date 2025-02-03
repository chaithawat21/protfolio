import React from 'react'

function About() {
    return (
        <section id="About" className='p-[3rem] pb-[10rem] bg-black'>
            <div className='flex flex-col justify-center items-center py-[4rem]'>
                <h1 className='text-white text-[2rem] font-[500]'>ABOUT</h1>
            </div>
            
            <div className='flex flex-col gap-[1rem] py-[1rem] max-w-[40rem] mx-auto'>
                <p className='text-white text-justify text-[1rem] leading-relaxed indent-8'>I am an Art Director, Motion Graphic Designer, and Compositor with a passion for crafting visually compelling content for advertising, digital media, and broadcast. With experience leading creative direction, designing high-end motion graphics, and compositing visual effects, I specialize in enhancing brand storytelling and engagement. I have collaborated with directors, production teams, and designers to bring creative visions to life, from concept to final execution. My background includes a Master of Fine Arts in Animation & VFX and expertise in tools like After Effects, Nuke, Photoshop, Premiere Pro, and AI to deliver impactful visual experiences.</p>
           </div>
        </section>
    )
}

export default About;
