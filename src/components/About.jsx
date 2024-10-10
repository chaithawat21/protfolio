import React from 'react'

function About() {
    return (
        <section id="About" className='p-[3rem]'>
            <div className='flex flex-col justify-center items-center py-[4rem] '>
            <a href="/src/assets/pdf/Resume_Chaithawat.pdf" download="Resume_Chaithawat.pdf" className='has-tooltip text-[2rem] font-[500] '><span className='tooltip  text-[.8rem] rounded shadow-sm p-1 bg-gray-100  mt-[0.8rem] ml-[7rem]'>Download PDF</span>RESUME</a>
            </div>
            <div className='flex flex-row md:flex-col sm:flex-col justify-between md:justify-start sm:justify-start gap-[1rem] py-[1rem] border-b-[1px] border-gray-500 '>
                <h2>Work Experience</h2>
                <div className='flex flex-row md:flex-col sm:flex-col gap-[4rem] md:gap-[0rem] sm:gap-[0rem] '>
                    <p className='sm:text-[.8rem]'>January 2021 - January 2024</p>
                    <div className='max-w-[30rem] md:w-full sm:w-full'>
                        <p className='sm:text-[.8rem]'>Bloom Film Design<span className='text-[.8rem] sm:text-[.6rem]'>, Bangkok, Thailand</span></p>
                        <p className='sm:text-[.8rem]'>Compositor</p>
                        <ul className=' list-disc sm:text-[.8rem]'>
                            <li>Designed and composited visually compelling commercial projects for global brands, ensuring cohesive alignment with branding and creative briefs.</li>
                            <li>Contributed to the artistic direction and visual storytelling of commercials, enhancing the overall brand message and consumer engagement.</li>
                            <li>Collaborated closely with directors and production teams to refine and implement creative ideas from concept to final delivery.</li>
                            <li>
                                Oversaw the execution of complex compositing and seamless integration of 2D/3D elements, ensuring visually polished and high-quality results for digital and broadcast media.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-row md:flex-col sm:flex-col justify-between md:justify-start sm:justify-start  gap-[1rem] py-[1rem] border-b-[1px] border-gray-500'>
                <h2>Education</h2>
                <div className='flex flex-col md:gap-[1rem] sm:gap-[1rem]'>
                    <div className='flex flex-row md:flex-col sm:flex-col gap-[4rem] md:gap-[0rem] sm:gap-[0rem]'>
                        <p className='sm:text-[.8rem]'>2017 - 2020</p>
                        <div className='w-[30rem] md:w-full sm:w-full'>
                            <p className='sm:text-[.8rem]'>Academy of Art University<span className='text-[.8rem] sm:sm:text-[.6rem]'>, San Francisco, California, USA</span></p>
                            <p className='sm:text-[.8rem]'>Master of Fine Arts, Animation 3D and Visual Effects</p>
                        </div>
                    </div>
                    <div className='flex flex-row md:flex-col sm:flex-col gap-[4rem] md:gap-[0rem] sm:gap-[0rem]'>
                        <p className='sm:text-[.8rem]'>2012 - 2017</p>
                        <div className='w-[30rem] md:w-full sm:w-full'>
                            <p className='sm:text-[.8rem]'>King Mongkut's Institute of Technology Ladkrabang<span className='text-[.8rem] sm:text-[.6rem]'>, Bangkok, Thailand</span></p>
                            <p className='sm:text-[.8rem]'>Bachelor of Science in Industrial Education, Architecture</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row md:flex-col sm:flex-col justify-between md:justify-start sm:justify-start gap-[1rem] py-[1rem] border-b-[1px] border-gray-500'>
                <h2>Certification</h2>
                <div className='flex flex-row md:flex-col sm:flex-col gap-[4rem] md:gap-[0rem] sm:gap-[0rem] '>
                    <p className='sm:text-[.8rem] '>April 2024 - August 2024</p>
                    <div className='w-[30rem] md:w-full sm:w-full sm:text-[.8rem] '>
                        <p>Software Park<span className='text-[.8rem] sm:text-[.6rem]'>, Bangkok, Thailand</span></p>
                        <p>Full Stack JavaScript for Web Developer</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row md:flex-col sm:flex-col justify-between md:justify-start sm:justify-start gap-[3rem] md:gap-[1rem] sm:gap-[1rem] py-[1rem] border-b-[1px] border-gray-500'>
                <h2>Skills</h2>
                <ul className='w-[30rem] md:w-full sm:w-full sm:text-[.8rem] list-disc'>
                    <li>Graphic Design (Photoshop, Illustrator)</li>
                    <li>Video Editing & Color (Premiere Pro, DavVinci Resole)</li>
                    <li>Motion Graphics & Animation (After Effects, Nuke)</li>
                    <li>Web Design & UI/UX (Figma)</li>
                    <li>Visual Design</li>
                    <li>Advertising Design, Campaign Development and Storyboarding</li>
                    <li>Multitasking & Time Management</li>
                </ul>

            </div>
        </section>
    )
}

export default About