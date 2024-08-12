import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import CreitCards from "../../Images/website/credit-cards.webp"
import { motion } from 'framer-motion'



const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark text-white pt-12 pb-8'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                {/* company section */}
                <motion.div
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.5}}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: 0.2,
                    duration: 0.6
                }}
                className='space-y-6'>
                    <h1 className='text-3xl uppercase font-bold'>
                        Coders Coffee
                    </h1>
                    <p className='text-sm max-w-[300px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos aliquid nobis consequuntur non accusantium quod debitis amet dolore? Quis neque laboriosam blanditiis? Fuga, architecto? Ipsam modi optio molestias velit!
                    </p>
                    <div>
                        <p className='flex items-center gap-2'>
                            <FaPhone/>
                            +961 76734377
                        </p>
                        <p className='flex items-center gap-2 mt-2'>
                            <FaMapLocation/>
                            Noida, Uttar Pradesh
                        </p>
                    </div>
                </motion.div>

                {/* footer link section */}
                <motion.div
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: 0.4,
                    duration: 0.6
                }}
                className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-2 gap-3'>
                        {/* first column section */}
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        {/* second column section */}
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* social link section */}
                <motion.div
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: 0.6,
                    duration: 0.6
                }}
                className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Follow Us</h1>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                        <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                        <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                    </div>
                    <div>
                        <h1 className='mb-2 text-xl font-semibold'>Payment Methods</h1>
                        <img src={CreitCards} alt='creditCardsImage' className='w-[80%]'/>
                    </div>
                </motion.div>
            </div>

            {/* Copy right section */}
            <p
            className='text-white text-center mt-8 border-t-2 pt-8'>
                Copyright &copy; 2024 Company Name. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer