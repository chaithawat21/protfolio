import React from 'react'

function Contact() {
    return (
        <section id="Contact" className='flex flex-col  gap-[1rem] px-[2rem] py-[10rem] '>
            <h1 className='text-[2rem] font-[500] text-center pb-[10rem]'>CONTACT</h1>
            <div className='flex flex-row justify-between items-center pb-[8rem] '>
                <div className='flex flex-col gap-[4rem]'>
                    <div className='flex flex-row gap-[1rem]'>
                        <h2 className='text-[1.5rem] font-[400]'>EMAIL</h2>
                        <a className='text-[1.5rem] font-[100]' href="mailto:chaithawat.contact@gmail.com">chaithawat.contact@gmail.com</a>
                    </div>
                    <div className='flex flex-row gap-[1rem]'>
                        <h2 className='text-[1.5rem] font-[400]'>PHONE</h2>
                        <p className='text-[1.5rem]  font-[100]' >092-595-8854</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[4rem]'>
                    <a className='text-[1.5rem] text-center font-[400]' href="https://wa.me/66925958854" target="_blank">WhatsApp</a>
                    <a className='text-[1.5rem] text-center font-[400]' href="https://www.linkedin.com/in/chaithawat/" target="_blank" >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact