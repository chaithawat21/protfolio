import React from 'react'
import ReactPlayer from 'react-player'

function Project() {
    return (
        <section id="Projects" className="Projects flex flex-col justify-center items-center gap-4 px-[1rem] bg-gray-50">
            <h1 className='text-[2rem] font-[300] mt-[5rem]'>2024</h1>

            <div className='grid grid-cols-[repeat(2,_1fr)] md:grid-cols-[1fr] sm:grid-cols-[1fr]  grid-rows-[repeat(2,_1fr)] md:grid-rows-[repeat(3,_1fr)] sm:grid-rows-[repeat(3,_1fr)]  gap-x-[1rem] gap-y-[0px] px-[0rem]' >
                <div>
                    <h2 >Isuzu - X-series 2024</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=71hG0N3FGL4"
                            width="100%"
                            height="100%"
                            controls
                            title="Isuzu X-series 2024"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(2,_1fr)] gap-x-[0px] gap-y-[0px]  w-[560px] sm:w-[375px] sm:h-[210px] mt-[1.5rem]'>
                    <img src="/isuzu2024a01.png" alt="a01" />
                    <img src="/isuzu2024a02.png" alt="a02" />
                    <img src="/isuzu2024b01.png" alt="b01" />
                    <img src="/isuzu2024b02.png" alt="b02" />
                    {/* <img src="/isuzu2024d02.png" alt="c02" />
                    <img src="/isuzu2024d01.png" alt="c01" /> */}
                    {/* <img src="/src/assets/isuzu2024c02.png" alt="c02" />
                    <img src="/src/assets/isuzu2024c01.png" alt="c01" /> */}
                </div>
                <div className='grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(2,_1fr)] gap-x-[0px] gap-y-[0px]  w-[560px] sm:w-[375px] sm:h-[210px] mt-[1.5rem]'>
                    {/* <img src="/isuzu2024a01.png" alt="a01" />
                    <img src="/isuzu2024a02.png" alt="a02" /> */}
                    {/* <img src="/src/assets/isuzu2024b01.png" alt="b01" />
                    <img src="/src/assets/isuzu2024b02.png" alt="b02" /> */}
                    <img src="/isuzu2024d02.png" alt="c02" />
                    <img src="/isuzu2024d01.png" alt="c01" />
                    <img src="/isuzu2024c02.png" alt="c02" />
                    <img src="/isuzu2024c01.png" alt="c01" />
                </div>

            </div>
            <h1 className='text-[2rem] font-[300] mt-[5rem]'>2023</h1>
            <div className='grid grid-cols-[repeat(2,_1fr)] md:grid-cols-[1fr] sm:grid-cols-[1fr] grid-rows-[repeat(5,_1fr)] md:grid-rows-[repeat(10,_1fr)] sm:grid-rows-[repeat(10,_1fr)]  gap-x-[1rem] gap-y-[1rem]'>
                <div>
                    <h2>Isuzu - MU-X Phantom Collection 2023</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=hMvsoIK4aBA"
                            width="100%"
                            height="100%"
                            controls
                            title="Isuzu - MU-X Phantom Collection 2023"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(2,_1fr)] gap-x-[0px] gap-y-[0px]   w-[560px] sm:w-[375px] sm:h-[210px] mt-[1.5rem]'>
                    <img src="/isuzu2023a01.jpg" alt="liveshoot-a" />
                    <img src="/isuzu2023b01.jpg" alt="liveshoot-b" />
                    <img src="/isuzu2023e01.jpg" alt="liveshoot-c" />
                    <img src="/isuzu2023d01.jpg" alt="liveshoot-d" />
                </div>
                <div>
                    <h2>OnePlus Open - Open for Everything</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=URbHvaJeQYU"
                            width="100%"
                            height="100%"
                            controls
                            title="OnePlus Open - Open for Everything"
                        />
                    </div>
                </div>
                <div>
                    <h2>Downy - Primavera</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/887209848"
                            width="100%"
                            height="100%"
                            controls
                            title="Downy - Primavera"
                        />
                    </div>
                </div>
                <div>
                    <h2>BMW i7 - The Protégé</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/887562904"
                            width="100%"
                            height="100%"
                            controls
                            title="BMW i7 - The Protégé"
                        />
                    </div>
                </div>
                <div>
                    <h2>Mercedes - EQS</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/827900724"
                            width="100%"
                            height="100%"
                            controls
                            title="Mercedes - EQS"
                        />
                    </div>
                </div>
                <div>
                    <h2>Zhenjiu - Zhen</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/919467683"
                            width="100%"
                            height="100%"
                            controls
                            title="Zhenjiu - Zhen"
                        />
                    </div>
                </div>
                <div>
                    <h2>Midea - Manual</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/782776942"
                            width="100%"
                            height="100%"
                            controls
                            title="Midea - Manual"
                        />
                    </div>
                </div>
                <div>
                    <h2>Beaufort X Singuila - Au coeur de la fraîcheur</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=g26ueghzkUM"
                            width="100%"
                            height="100%"
                            controls
                            title="Dose de fraîcheur avec Singuila"
                        />
                    </div>
                </div>
                <div>
                    <h2>TaoTao - Cotton</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/753879233"
                            width="100%"
                            height="100%"
                            controls
                            title="TaoTao - Cotton"
                        />
                    </div>
                </div>
                <div>
                    <h2>BMW - Bava Next</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/786181504"
                            width="100%"
                            height="100%"
                            controls
                            title="BMW - Bava Next"
                        />
                    </div>
                </div>
            </div>
            <h1 className='text-[2rem] font-[300] mt-[5rem]'>2022</h1>
            <div className='grid grid-cols-[repeat(2,_1fr)] md:grid-cols-[1fr] sm:grid-cols-[1fr] grid-rows-[repeat(3,_1fr)]  md:grid-rows-[repeat(6,_1fr)] sm:grid-rows-[repeat(6,_1fr)] gap-x-[1rem] gap-y-[1rem]'>
                <div>
                    <h2>Isuzu - The new MU-X be UNCHARTED 2022</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=zY1x3ER-p7k"
                            width="100%"
                            height="100%"
                            controls
                            title="Isuzu - The new MU-X be UNCHARTED 2022"
                        />
                    </div>
                </div>
                <div className='mt-[1.5rem]'>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=QT7g0Vq_gDc"
                            width="100%"
                            height="100%"
                            controls
                            title="Isuzu - The new MU-X be UNCHARTED 2022(VDO Brochure)"
                        />
                    </div>
                </div>
                <div>
                    <h2>FoodPanda - Rider</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/820065111"
                            width="100%"
                            height="100%"
                            controls
                            title="FoodPanda - Rider"
                        />
                    </div>
                </div>
                <div>
                    <h2>Midea - GAIA</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/701592830"
                            width="100%"
                            height="100%"
                            controls
                            title="Midea - GAIA"
                        />
                    </div>
                </div>
                <div>
                    <h2>Meituan - New Spokesperson</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/730954325"
                            width="100%"
                            height="100%"
                            controls
                            title="Meituan - New Spokesperson"
                        />
                    </div>
                </div>
                <div>
                    <h2>TSINGTAO - Smiley</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/685735638"
                            width="100%"
                            height="100%"
                            controls
                            title="TSINGTAO - Smiley"
                        />
                    </div>
                </div>
            </div>
            <h1 className='text-[2rem] font-[300] mt-[5rem]'>2021</h1>
            <div className='grid grid-cols-[repeat(2,_1fr)] md:grid-cols-[1fr] sm:grid-cols-[1fr] grid-rows-[repeat(3,_1fr)] md:grid-rows-[repeat(6,_1fr)] sm:grid-rows-[repeat(6,_1fr)] gap-x-[1rem] gap-y-[1rem]'>
                <div>
                    <h2>LEAGUE OF LEGENDS (Mobile game)</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/646766640"
                            width="100%"
                            height="100%"
                            controls
                            title="LEAGUE OF LEGENDS (Mobile game)"
                        />
                    </div>
                </div>
                <div>
                    <h2>BMW x UBR - BAVA Episode02</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/598701917"
                            width="100%"
                            height="100%"
                            controls
                            title="BMW x UBR - BAVA Episode02"
                        />
                    </div>
                </div>
                <div>
                    <h2>TSINGTAO - Raise the bar!</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/541020715"
                            width="100%"
                            height="100%"
                            controls
                            title="TSINGTAO - Raise the bar!"
                        />
                    </div>
                </div>
                <div>
                    <h2>Doppel Le Choc Des Puissants</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/544494189"
                            width="100%"
                            height="100%"
                            controls
                            title="Doppel Le Choc Des Puissants"
                        />
                    </div>
                </div>
                <div>
                    <h2>DSS Magnum Filter - Bersatu Lebih Mantap</h2>
                    <div className='w-[560px] h-[315px] md:w-[560px] sm:w-[375px] sm:h-[211px] relative '>
                        <ReactPlayer
                            url="https://vimeo.com/519812011"
                            width="100%"
                            height="100%"
                            controls
                            title="DSS Magnum Filter - Bersatu Lebih Mantap"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project