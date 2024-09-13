import React from 'react'
import {motion} from "framer-motion"
import { SlideUp } from '../NavBar/Utility/Animation'

const ExploreData = [
    {
        id: 1,
        title: "The Amazing Adventure",
        imgage: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D",
        about:
            `If you Only have one day to visit yosemite
        National Park and yoy want to make the out of it.
        `,
        date: "May 30, 2022",
    },
    {
        id: 2,
        title: "The Unforgettable",
        image: "https://cdn.pixabay.com/photo/2019/07/01/12/52/forest-4309913_640.jpg",
        about:
            `If you Only have one day to visit yosemite
        National Park and yoy want to make the out of it.
        `,
        date: "May 30, 2022",
    },
    {
        id: 3,
        title: "The Enchanting",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbShhzrrEqfzITlz_26d5iRfNJ2-7gJQ4Vw&s",
        about:
            `If you Only have one day to visit yosemite
        National Park and yoy want to make the out of it.
        `,
        date: "May 30, 2022",
    }
]

function Explore() {
  return (
    <div>
         <section>
         <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.2 }}
                className='text-center md:max-w-[650px] mx-auto
       space-y-4'>
                <p className='text-3xl'>The Explore</p>
                <p>
                    Our favorite stories about public lands and
                    oportunites for you to
                    go involed in protecting your outdoor
                    experienced.
                </p>
            </motion.div>
            <div className='grid gris-cols-1 md:grid-cols-3 gap-6 place-items-center '>
                {
                    ExploreData.map((data) => {
                        return (
                            <motion.div
                            variants={SlideUp(data.delay)}
                            initial="hidden"
                            animate= "visible"
                            className='w-full max-w-[350px]'>
                                <img
                                    className='object-cover w-full h-64'
                                    src={data.image}
                                    alt={data.title} />
                                <div className='flex flex-col justify-between items-center p-6'>
                                    <p className='uppercase'>{data.date}</p>
                                    <p className='text-3xl font-semibold font-merriwather'>{data.title}</p>
                                    <p>{data.about}</p>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
                <button className='block mx-auto mt-6 text-brandBlue uppercase font-bold '>See More</button>
         </section>
    </div>
  )
}

export default Explore