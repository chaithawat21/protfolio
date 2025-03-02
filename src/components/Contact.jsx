import React from 'react'

function Contact() {
    return (
        <section id="Contact" className='flex flex-col sm:items-center gap-[1rem] px-[10rem] pt-[5rem] pb-[5rem]  bg-black '>
            <h1 className='text-white text-[2rem] font-[500] text-center pb-[5rem]'>CONTACT</h1>
            <div className='flex flex-row md:flex-col sm:flex-col justify-between md:justify-center sm:justify-center items-center md:gap-[2rem] sm:gap-[2rem] pb-[8rem] '>
                <div className='flex flex-col  gap-[4rem] md:gap-[1rem] sm:gap-[1rem]'>
                    <div className='flex flex-row items-baseline gap-[1rem]'>
                        <h2 className='text-[1.5rem] text-white font-[400] sm:text-[1.2rem]'>EMAIL</h2>
                        <a className='text-white text-[1.5rem] font-[100] sm:text-[1rem]' href="mailto:chaithawat.contact@gmail.com">chaithawat.contact@gmail.com</a>
                    </div>
                    <div className='flex flex-row items-baseline gap-[1rem]'>
                        <h2 className='text-[1.5rem] text-white font-[400] sm:text-[1.2rem]'>PHONE</h2>
                        <p className='text-[1.5rem] text-white font-[100] sm:text-[1rem]' >092-595-8854</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[4rem] md:gap-[1rem] sm:gap-[1rem]'>
                    <a className='text-[1.5rem] text-white text-center font-[400] sm:text-[1rem]' href="https://wa.me/66925958854" target="_blank">WhatsApp</a>
                    <a className='text-[1.5rem] text-white text-center font-[400] sm:text-[1rem]' href="https://www.linkedin.com/in/chaithawat/" target="_blank" >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact