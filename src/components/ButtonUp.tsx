import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function ButtonUp({}: Props) {
    
    const [show, setShow] = useState(false);
    const onClick = () => {

        window.scrollTo(0,0)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
          window.removeEventListener('scroll', onScroll);
        }
    }, []);

    const onScroll = (e: Event) => {

        const y = window.scrollY;
        
        if(y >= 400) {
            if(show != true) setShow(true);
        }
        else {
            if(show == false) setShow(false)
        }
    }

    
    if(show == false) {

        return (
            <></>
        )
    }
    
    return (

        <motion.div
        initial={{
            rotateZ: 0,
            scale: 0,
        }}

        animate={{
            scale: [1.2, 1],
            rotateZ: [0, -5 ,15, 5, -15, 5, 15, 0],
            transition: {
                duration: .3,
                type: "spring",
                repeat: Infinity,
                repeatDelay: 5
            }
        }}

        onClick={onClick}
        className='fixed bottom-10 right-10 bg-blue-600 z-40 p-2 text-white rounded-lg drop-shadow-lg cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
        </motion.div>
    )
}