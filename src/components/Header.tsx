import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {

    const onClickLink = (link: string) => {

        document.getElementById(link)?.scrollIntoView();
    }

    return (
        <header className='absolute left-0 top-0 z-50 w-full'>

            <div className='flex flex-col md:flex-row items-center justify-between w-[100%] md:w-[80%] m-auto 3xl:w-[60%] py-2 md:py-5'>
                <ul className='flex flex-row'>
                    <li>
                        <SocialIcon 
                            className='active:scale-125 hover:rotate-12 transition-all'
                            url='https://www.linkedin.com/in/david-xavier-81b25421a/'
                            bgColor='transparent'
                            fgColor='rgb(30 58 138)'
                            target={"_blank"}
                        />
                    </li>
                    <li>
                        <SocialIcon 
                            className='active:scale-125 hover:rotate-12 transition-all'
                            url='https://github.com/FoxDead12'
                            bgColor='transparent'
                            fgColor='rgb(30 58 138)'
                            target={"_blank"}

                        />
                    </li>
                    <li>
                        <SocialIcon 
                            className='active:scale-125 hover:rotate-12 transition-all'
                            url='https://www.instagram.com/davidxavier002/'
                            bgColor='transparent'
                            fgColor='rgb(30 58 138)'
                            target={"_blank"}

                        />
                    </li>
                </ul>

                <ul className='flex justify-between'>
                    <li className='text-blue-900 text-sm md:text-base mx-2 hover:text-blue-600 cursor-pointer active:scale-110' onClick={() => onClickLink("about")}>Sobre Min</li>
                    <li className='text-blue-900 text-sm md:text-base mx-2 hover:text-blue-600 cursor-pointer active:scale-110' onClick={() => onClickLink("formation")}>Formações</li>
                    <li className='text-blue-900 text-sm md:text-base ml-2 hover:text-blue-600 cursor-pointer active:scale-110' onClick={() => onClickLink("experiences")}>Experiencias</li>
                    <li className='text-blue-900 text-sm md:text-base ml-2 hover:text-blue-600 cursor-pointer active:scale-110' onClick={() => onClickLink("footer")}>Contacte-Me</li>
                </ul>
            </div>

        </header>
    )
}