import React from 'react'
import bannerImg from "../../Images/coffee-cover.jpg"
import AppStoreImg from "../../Images/website/app_store.png"
import PlayStoreImg from "../../Images/website/play_store.png"
import { motion } from 'framer-motion'


const BannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
}

const AppBanner = () => {
  return (
    <div className='container my-14'>
        <div style={BannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center
        rounded-xl'>
            <div>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <motion.h1
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        delay: 0.2
                    }}
                    className='text-2xl font-semibold text-center sm:text-4xl'>
                        Download the app
                    </motion.h1>
                    
                    <motion.p
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        delay: 0.4
                    }}
                    className='text-center sm:px-20'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorum illum dolorem!
                    </motion.p>

                    {/* images link */}
                    <div className='flex gap-4 items-center justify-center'>
                        <a href='#' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <motion.img
                            initial={{opacity: 0, y: 100}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                delay: 0.6
                            }}
                            src={AppStoreImg} alt='Image'/>
                        </a>
                        <a href='#' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <motion.img
                            initial={{opacity: 0, y: 100}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                delay: 0.8
                            }}
                            src={PlayStoreImg} alt='Image'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppBanner