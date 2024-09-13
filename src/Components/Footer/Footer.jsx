import React from 'react'
import {motion} from "framer-motion"

const bgImg = {
    backgroundImage: `url("https://images.unsplash.com/photo-1691555574445-ac6027b8d1ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2t5JTIwYmVhY2h8ZW58MHx8MHx8fDA%3D")`,
    backgroundrepeat: 'no-repeat',
    backgroundPosition: 'center',
}

function Footer() {
  return (
    <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 0.2 }} 
    style={bgImg} className='h-[500px] reletive
    bg-brandDark '>
        <div>
            <p className='relative z-20 top-[450px] left-[530px]'>
                © 2024. All rights reserved | The Coding 
                Journery
            </p>
        </div>
    </motion.footer>
  )
}

export default Footer