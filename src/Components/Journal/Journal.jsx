import React from 'react'
import { motion } from "framer-motion"
import { SlideUp } from '../NavBar/Utility/Animation'

const JournalData = [
    {
        id: 1,
        title: "An Unforgattable",
        about:
            `If you Only have one day to visit yosemite
        National Park and yoy want to make the out of it.
        `,
        date: "May 30, 2022",
        url: "#",
        image: "https://images.unsplash.com/photo-1422405061047-61f0cf84c1dc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZGVuJTIwZ2F0ZSUyMGJyaWRnZSUyMG5pZ2h0fGVufDB8fDB8fHww",
        delay: 0.2
    },
    {
        id: 2,
        title: "Sumphonies in Steel",
        about:
            `Crossing the Golden Gate of the Forbidden Forbidden
        Bridge, you will find the sumphonies in steel.
        `,
        date: "April 30, 2021",
        url: "#",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbyPjy97MXEQRe5YwgSiqTVSTgvpdeednfg&s",
        delay: 0.4
    }
]

function Journal() {
    return (
        <section className='container mt-40 id="journal'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.2 }}
                className='text-center md:max-w-[650px] mx-auto
       space-y-4'>
                <p className='text-3xl'>The Journal</p>
                <p>
                    Our favorite stories about public lands and
                    oportunites for you to
                    go involed in protecting your outdoor
                    experienced.
                </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center mt-20'>
                {
                    JournalData.map((data) => {
                        return (
                            <motion.div
                            variants={SlideUp(data.delay)}
                            initial="hidden"
                            animate= "visible"
                            className='w-full max-w-[350px]'>
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className='w-full h-64 object-cover'
                                />
                                <div className='space-y-1 py-6 text-center px-12'>
                                    <p className='uppercase'>{data.date}</p>
                                    <p className='text-3xl font-semibold font-merriwather'>{data.title}</p>
                                    <p className='!mt-8'>{data.about}</p>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Journal