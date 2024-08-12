import React, { useState } from 'react'
import BgImage from "../../Images/bg-slate.png"
import BlackCoffe from "../../Images/black.png"
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'


const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
}

const Hero = () => {
    const [sidebar, setSidebar] = useState(false)
  return (
    <main style={bgImage} className='pb-16 lg:pb-0'>
        <section className='relative h-[641px] w-full overflow-hidden'>
            <div className="container">
                {/* Navbar section */}
                <Navbar sidebar={sidebar} setSidebar={setSidebar}/>

                {/* Hero section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] md:mt-[100px] lg:mt-0">
                    {/* text content section */}
                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                        <motion.h1
                        initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 1
                        }}
                        className='text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</motion.h1>
                        <motion.div
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 1.2
                        }}
                        className='relative'>
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'>Black Lifstyle Lovers,</h1>
                                <p className='text-sm leading-loose opacity-55'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima expedita
                                    veritatis esse possimus molestias voluptates repellat deserunt nam? Nemo assumenda
                                    numquam enim vitae eius?
                                </p>
                            </div>
                            <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                        </motion.div>
                    </div>

                    {/* image section */}
                    <div className='relative hidden md:block'>
                        <motion.img
                        initial={{opacity: 0, scale: 0}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4
                        }}
                        src={BlackCoffe} alt='Coffe-Cup' className='relative z-40 h-[400px] md:h-[550px] img-shadow'/>
                        {/* orange circle ring  */}
                        <motion.div
                        initial={{opacity: 0, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.8
                        }}
                        className='absolute top-24 -right-16 border-primary rounded-full z-10 border-[20px]
                        h-[180px] w-[180px]'>
                        </motion.div>
                        <motion.div
                        initial={{opacity: 0, x: -100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.8
                        }}
                        className='absolute -top-20 left-[200px] z-[1]'>
                            <h1 className='text-[140px] font-bold scale-150 text-darkGray/40
                            leading-none'>
                                Blvck Tumbler
                            </h1>
                        </motion.div>
                    </div>

                    {/* third div section */}
                    <div className='hidden lg:block'>
                        <motion.div
                        initial={{opacity: 0, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 1.2
                        }}
                        className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                            <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                            <div className='relative'>
                                <div className='relative z-10 space-y-4'>
                                    <h1 className='text-2xl'>Blvck Tumbler</h1>
                                    <p className='text-sm leading-loose opacity-55'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima expedita
                                        Quisquam minima expedita Quisquam minima expedita
                                    </p>
                                </div>
                                <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50'></div>
                            </div>
                        </motion.div>
                    </div>

                    <div></div>
                </div>
            </div>


            {/* sidebar menu section */}
            {
                sidebar && (
                    <motion.div
                    initial={{x: "100%"}}
                    whileInView={{x: 0}}
                    className='fixed top-0 right-0 z-10 h-full w-[90px] bg-gradient-to-b from-primary/80
                    to-primaryDark/80 backdrop-blur-sm duration-75 ease-in-out'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='flex flex-col justify-center items-center gap-6 text-white'>
                                {/* line */}
                                <div className='w-[1px] h-[70px] bg-white'></div>

                                {/* social links */}
                                <div className='flex flex-col justify-center items-center gap-6'>
                                    <div className='inline-block border border-white p-2 cursor-pointer rounded-full'>
                                        <FaFacebookF className='text-2xl'/>
                                    </div>
                                    <div className='inline-block border border-white p-2 cursor-pointer rounded-full'>
                                        <FaTwitter className='text-2xl'/>
                                    </div>
                                    <div className='inline-block border border-white p-2 cursor-pointer rounded-full'>
                                        <FaInstagram className='text-2xl'/>
                                    </div>
                                </div>

                                {/* line */}
                                <div className='w-[1px] h-[70px] bg-white'></div>
                            </div>
                        </div>
                    </motion.div>
                )
            }
        </section>
    </main>
  )
}

export default Hero