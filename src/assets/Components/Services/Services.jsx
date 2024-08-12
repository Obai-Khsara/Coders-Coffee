import React from 'react'
import Coffee1 from "../../Images/coffee/coffee1.png"
import Coffee3 from "../../Images/coffee/coffee3.png"
import { delay, motion } from 'framer-motion'

const Services = () => {

  const servicesData = [
    {
      id: 1,
      image: Coffee1,
      title: "Black Coffee",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quam."
    },
    {
      id: 2,
      image: Coffee3,
      title: "Hot Coffee",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quam."
    },
    {
      id: 3,
      image: Coffee1,
      title: "Cold Coffee",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quam."
    },
  ]

  return (
    <div className='container my-16 space-y-4'>

        <div className='text-center max-w-lg mx-auto space-y-2'>
            <motion.h1
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.2
            }}
            className='text-3xl font-bold text-lightGray'>
                Fresh and <span className='text-primary'>Tasty Coffee</span>
            </motion.h1>
            <motion.p 
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.4
            }}
            className='text-sm opacity-50'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis neque provident fugit! Veniam doloribus totam sequi impedit animi, corrupti magnam nisi soluta vitae. Reiciendis, error incidunt. Sequi repellendus enim odio.
            </motion.p>
        </div>

        <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {
              servicesData.map((service)=>(
                <div
                className='text-center p-4 space-y-6'
                key={service.id}>
                  <img className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer'
                  src={service.image} alt={`Image${service.id}`}/>
                  <div className='space-y-2'>
                    <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
                    <p className='text-darkGray'>{service.subtitle}</p>
                  </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Services