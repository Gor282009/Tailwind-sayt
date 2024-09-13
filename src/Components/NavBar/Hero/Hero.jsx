import React from 'react'
import { FaPlay } from "react-icons/fa";
import {motion} from "framer-motion"

function Hero() {
  return (
    <>
       <section className='min-h-[900px] flex justify-center items-center'>
          <div className='absoulute inset-0 bg-gradient-radial
          from-transparent via-black/50 to-black z-10'
          style={{background: "radial-gradient(circle,rgba(0,0,0,0.3) 50%, rgba(11,11,13,0.8) 90%)",

          }}>

          </div>

          <motion.div
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{duration: 2, delay: 0.2}}
          className='container relative z-20
           text-center space-y-8'>
            <h1 className='text-5xl md:text-8xl font-bold
            font-merriwather
            '>The Great Outdoors</h1>
            <p>Wender Often, Wonder Always.</p>
            <div className='inline-flex justify-center items-center
            border-2 h-14 w-14 rounded-full !mt24 md:!mt-20'>
                <FaPlay />
            </div>
          </motion.div>
          <div>

          </div>
       </section>
    </>
  )
}

export default Hero