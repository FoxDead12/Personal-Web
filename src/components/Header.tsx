import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { ILanguage } from '../languages/ILanguage';

type Props = {

    language: ILanguage,
    changeMainLanguage: (lg: string) => void;
}

export default function Header({language, changeMainLanguage}: Props) {

    const onClickLink = (link: string) => {

        document.getElementById(link)?.scrollIntoView();
    }

    const changeLanguage = (checked: any) => {

        if(checked === false) {

            changeMainLanguage("PT");
        }
        else {

            changeMainLanguage("EN");
        }
    }

    return (
        <header className='absolute left-0 top-0 z-40 w-full'>

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
                    <li className='flex items-center pl-4'>

                        {
                            language?.code ?
                            <div className='relative w-[4rem] md:w-[5rem] h-[2rem] md:h-[2.5rem] marker:z-0 bg-blue-900 bg-opacity-50 rounded-full shadow-md'>

                            <input type="checkbox" name="lg" id="lg" className='hidden peer' checked={language?.code === "pt-PT" ? false : true} onChange={(e) => changeLanguage(e.currentTarget.checked)}/>
                            <label className='absolute w-full h-full cursor-pointer' htmlFor='lg'></label>
                            
                            <div className='z-0 relative w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] bg-blue-800 rounded-full translate-x-0 peer-checked:translate-x-[100%] transition-transform pointer-events-none shadow-md'></div>
                            
                            <h5 className='absolute right-[0.4rem] top-[0.40rem] md:right-[0.6rem] md:top-[0.5rem] text-sm md:text-base font-normal text-gray-700 peer-checked:text-white pointer-events-none'>EN</h5>
                            <h5 className='absolute left-[0.5rem] top-[0.40rem] md:left-[0.7rem] md:top-[0.5rem] text-sm md:text-base font-normal text-white peer-checked:text-gray-700 pointer-events-none'>PT</h5>
                        
                            </div>
                            : ''
                        }

                    </li>
                </ul>

                <ul className='flex justify-between'>
                    <li className='text-blue-900 text-sm md:text-base mx-2 hover:text-blue-600 cursor-pointer active:scale-110' onClick={() => onClickLink("about")}>{language?.header?.about}</li>
                    <li className='text-blue-900 text-sm md:text-base mx-2 hover:text-blue-600 cursor-pointer active:scale-110' onClick={() => onClickLink("formation")}>{language?.header?.formation}</li>
                    <li className='text-blue-900 text-sm md:text-base ml-2 hover:text-blue-600 cursor-pointer active:scale-110' onClick={() => onClickLink("experiences")}>{language?.header?.experience}</li>
                    <li className='text-blue-900 text-sm md:text-base ml-2 hover:text-blue-600 cursor-pointer active:scale-110' onClick={() => onClickLink("footer")}>{language?.header?.contact}</li>
                </ul>
            </div>

        </header>
    )
}