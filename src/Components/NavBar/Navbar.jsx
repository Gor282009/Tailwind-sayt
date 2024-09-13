import React from 'react'
import { SlideBottom } from './Utility/Animation'
import {motion}  from "framer-motion"
import { SlLocationPin } from "react-icons/sl";

function Navbar() {
  return (
    <>
            <nav className='container flex  flex-row
            justify-around items-center py-4
            md: py-8  uppercase font-semibold
            relative z-20 text-xs md: text-lg'>
                <li><motion.a variants={SlideBottom(0)} initial="hidden" animate="visible" href="#">About</motion.a></li>
                <li><motion.a variants={SlideBottom(0.2)} initial="hidden"animate="visible" href="#">Explore</motion.a></li>
                <li><motion.a variants={SlideBottom(0.4)} initial="hidden" animate="visible" href="#"><SlLocationPin className=' font-xl ' /></motion.a></li>
                <li><motion.a variants={SlideBottom(0.6)} initial="hidden" animate="visible" href="#">Journal</motion.a></li>
                <li><motion.a variants={SlideBottom(0.8)} initial="hidden" animate="visible" href="#">Search</motion.a></li>
            </nav>
    </>
  )
}

export default Navbar