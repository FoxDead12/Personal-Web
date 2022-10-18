import { motion, Variants } from 'framer-motion';
import React from 'react'

type Props = {}

export default function Experiences (props: Props) {
    
    return (
        <section id='experiences' className='relative z-10'>

            <div className='absolute w-full h-full bg-blue-900 experience-container'></div>
            <div className='relative w-[90%] m-auto 3xl:w-[70%] flex flex-col justify-between p-4 z-10'>
                <h1 className='text-white text-lg italic'>{"<"}Experiencias{">"}</h1>
                <div className='relative w-[90%] m-auto 3xl:w-[90%] flex flex-col items-center justify-center my-24'>
                    
                    <div className='relative w-full flex flex-col items-center justify-center py-4'>

                        <div className='absolute -right-8 md:right-auto  h-full w-4 bg-red-400 rounded-full'></div>
                        
                        <Experience left={true} img={"klab-logo.png"} cargo={"Funcionário de TI"} empresa={"Kreator Lab"} localizacao={"Eslovênia"} dataInicio={new Date("May 1, 2019")} dataFim={new Date("July 1, 2019")} />
                        <Experience left={false} img={"nos_opengraph.png"} cargo={"RPA Developer"} empresa={"NOS"} localizacao={"Porto"} dataInicio={new Date("January 1, 2020")} dataFim={new Date("March 1, 2020")} />
                        <Experience left={true} img={"continente.jpeg"} cargo={"Gestor de Caixa"} empresa={"Continente"} localizacao={"Porto"} dataInicio={new Date("October 1, 2020")} dataFim={new Date("October 1, 2021")} />
                        <Experience left={false} img={"arkis.png"} cargo={"Desenvolvedor de Aplicativos Web"} empresa={"Arkis"} localizacao={"Porto"} dataInicio={new Date("October 1, 2021")} dataFim={new Date("January 1, 2022")} />
                        <Experience left={true} img={"mozantech.jpeg"} cargo={"Node Js Back-End Developer"} empresa={"Mozantech"} localizacao={"Porto"} dataInicio={new Date("March 1, 2022")} dataFim={new Date("July 1, 2022")} />

                    </div>

                </div>
                <h1 className='text-blue-900 text-lg italic'>{"</"}Experiencias{">"}</h1>
            </div>

        </section>
    )
}

interface IExperience {

    left: boolean;
    img: string;
    cargo: string;
    empresa: string;
    localizacao: string;
    dataInicio: Date;
    dataFim: Date;
}

const Experience = (props: IExperience) => {

    const left: Variants = {
        initial: {
            opacity: 0,
            x: -200
        },
        animate: {
            opacity: 1,
            x: 0
        }

    }

    const right = {
        initial: {
            opacity: 0,
            x: 200
        },
        animate: {
            opacity: 1,
            x: 0
        }
    }

    return (
        <motion.div
        
        initial={"initial"}
        whileInView={"animate"}
        viewport={{margin: '-150px'}}
        variants={props.left === true? left: right}

        className={`relative flex-none w-[300px] md:w-[350px] max-w-[350px] bg-blue-800 opacity-100 md:opacity-70 hover:opacity-100 my-4 md:m-0 md:mx-4 p-4 rounded-md shadow-md  ${props.left === true ? 'md:mr-[450px]' : 'md:ml-[450px] md:mr-4'}`}>

            {/* Seta */}
            <div className={`absolute invisible md:visible m-auto ${props.left === true ? '-right-2' : '-left-2' } top-0 bottom-0 w-4 h-4 rotate-45 bg-blue-800 `}></div> 
            <div className={`absolute visible md:invisible m-auto -right-2 top-0 bottom-0 w-4 h-4 rotate-45 bg-blue-800 `}></div> 



            {/* Bola */}
            <div className={`absolute invisible md:visible m-auto ${props.left === true ? '-right-[50px]' : '-left-[50px]' } top-0 bottom-0 w-4 h-4 rounded-full bg-white border-4 border-gray-900 `}></div> 
            <div className={`absolute visible md:invisible m-auto -right-[35px] top-0 bottom-0 w-4 h-4 rounded-full bg-white border-4 border-gray-900 `}></div> 

            {/* Year */}
            <div className={`absolute invisible md:visible m-auto flex items-center -right-[60px] -top-20 bottom-0  font-bold text-blue-900 rotate-0 ${props.left === true ? '-right-[60px]' : '-left-[60px]'}`}>
                <h5 className='rotate-90 '>{props.dataInicio.getFullYear()}</h5>
            </div>

            <div className={`absolute visible md:invisible m-auto flex items-center -right-[45px] -top-20 bottom-0  font-bold text-blue-900 rotate-0 `}>
                <h5 className='rotate-90 '>{props.dataInicio.getFullYear()}</h5>
            </div>

            <div className='flex items-center justify-center'>
                <img src={"/img/logos/" + props.img} alt={props.empresa} className={"w-[100px] h-[100px] bg-white rounded-full object-contain shadow-md"} />
            </div>
            
            <div className='flex flex-col items-start mt-8 mb-4'>
                <h1 className='text-white text-xl tracking-wider'>{props.cargo}</h1>
                <h3 className='text-white text-base my-3'>{props.empresa}, {props.localizacao}</h3>
                {
                    props.dataFim ?
                    <p  className='text-gray-300 text-base italic capitalize'>{new Intl.DateTimeFormat('pt-PT', {month: 'long'}).format(props.dataInicio) + "-" + props.dataInicio.getFullYear()} / {new Intl.DateTimeFormat('pt-PT', {month: 'long'}).format(props.dataFim) + "-" + props?.dataFim.getFullYear()}</p>
                    :
                    <p  className='text-gray-300 text-base italic capitalize'>{new Intl.DateTimeFormat('pt-PT', {month: 'long'}).format(props.dataInicio) + "-" + props.dataInicio.getFullYear()} / <span className='font-bold'>atualmente</span></p>

                }
            </div>
            


        </motion.div>
    )
}