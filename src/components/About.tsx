import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
    
    
    return (
        <section id='about' className='relative min-h-[100vh] bg-blue-900 z-10 shadow-md'>
            
            <div className='relative w-[90%] h-full m-auto 3xl:w-[90%] left-0 bottom-0 top-0 right-0 flex flex-col justify-between p-4 z-0'>
                <h1 className='text-white text-lg italic'>{"<"}Sobre{">"}</h1>

                <div className='relative w-[90%] min-h-[100vh] m-auto 3xl:w-[60%] flex items-center justify-center py-8'>
                    <div className='w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-between'>
                       

                        <motion.div
                        initial={{x: -400, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true, margin: "-150px"}}
                        className='relative w-[100%] md:w-[70%] mb-5 lg:m-0 lg:mr-10 lg:w-[50%]'>
                            <motion.div initial={{scale: 1, y: 0, x: 0}} whileHover={{scale: [1, 1.02, 1], y: [0, 15, 0], x:[0, 6 ,12, 0], transition: {repeat: Infinity, duration: 0.9}}} className='absolute w-full h-full bg-blue-800 opacity-50 left-5 -bottom-5 md:left-10 md:-bottom-10 rounded-lg shadow-sm'></motion.div>
                            <img src="/img/foto2.jpg" alt="" className='pointer-events-none relative w-[100%] h-auto rounded-lg shadow-sm'/>
                        </motion.div>

                        <motion.div 
                        initial={{x: 400, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true, margin: "-150px"}}
                        className='relative w-[100%] mt-5 lg:m-0 lg:ml-10 lg:w-[50%]'>
                            <p className='text-white text-sm md:text-base xl:text-xl tracking-wider font-light w-full m-auto p-8 rounded-md shadow-lg'>
                                <h1 className='text-lg md:text-xl xl:text-3xl tracking-wider font-bold border-b border-spacing-1 pb-5 mb-0'>Eu!!</h1>
                                <br/>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </motion.div>


                    </div>
                </div>

                <h1 className='text-white text-lg italic'>{"</"}Sobre{">"}</h1>
            </div>

            

        </section>
    )
}