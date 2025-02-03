import React, { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleOnReady = () => {
    setIsLoading(false); // Hide loader once the video is ready
  };

  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center   bg-black "
    >
      <h1 className="text-white text-[3rem] font-[400] absolute z-10 top-[4rem] sm:text-[2rem] sm:top-[3.5rem] ">
        CHAITHAWAT PINSUWAN
      </h1>
      <p className="text-white text-[1.915rem] font-[100] absolute z-10 top-[7rem] sm:text-[1.275rem] sm:top-[5.5rem] ">Art Director / Motion Graphic / Compositor</p>

      <div className="w-screen h-screen relative  ">
        {isLoading ? (
          <motion.div
            className="absolute inset-0 flex justify-center items-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-white rounded-full animate-bounce" />
              <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-200" />
              <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-400" />
            </div>
          </motion.div>
        ) : null}

<ReactPlayer
    url="https://vimeo.com/1013053963"
    width="100%"
    height="100%"
    title="REEL 2024"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    loading="lazy"
    playing={true}
    muted={true}
    loop={true}  // Loop the video
    onReady={handleOnReady} // Fires when the video is ready
/>
      </div>
    </section>
  );
}

export default Home;
