import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Formations({}: Props) {
    
    
    return (
        <section id='formation' className='relative z-10'>
            
            <div className='relative w-[90%] m-auto 3xl:w-[70%] flex flex-col justify-between p-4 z-0'>
                <h1 className='text-blue-900 text-lg italic'>{"<"}Formações{">"}</h1>

                <div className='relative w-[90%] m-auto 3xl:w-[90%] flex flex-col lg:flex-row items-start justify-between my-24 pt-10 md:pt-4'>
                    
                    <div className='absolute top-0 -left-10 w-[15px] h-full lg:left-0 lg:w-full lg:h-[15px] bg-red-400 rounded-full'></div>

                    <Formation curso='Gestão e Programação de Sistemas Informáticos' escola='Ruiz Costa' image='ruizcosta.png' dataInicio={new Date("September 1, 2018")} dataFim={new Date("July 1, 2020")} 
                    skills={[
                        "Linguagens WEB: PHP, HTML5, CSS3;",
                        "Outras Linguagens: C, C#",
                        "Gestão de Base de Dados: MySQL, SQLServer;",
                        "Programção Orientada Objetos;",
                        "Montagem/Manutenção de Computadores;",
                        "Instalação/Configuração Redes;"
                    ]}/>

                    <Formation curso='Tecnologias e Programação de Sistemas de Informação' escola='ISPGAYA' image='ispgaya.png' dataInicio={new Date("September 1, 2020")} dataFim={new Date("July 1, 2022")} 
                    skills={[
                        "Linguagens WEB: PHP, HTML5, CSS3;",
                        "Outras Linguagens: Java, React Native",
                        "Gestão de Base de Dados: MySQL;",
                        "Programção Orientada Objetos;",
                        "Instalação/Configuração Redes;"
                    ]}/>
                    
                    <Formation curso='Licenciaturas Engenharia Informática' escola='ISPGAYA' image='ispgaya.png' dataInicio={new Date("September 1, 2022")} 
                    skills={[
                    ]}/>

                    
                </div>

                <h1 className='text-blue-900 text-lg italic'>{"</"}Formações{">"}</h1>
            </div>

        </section>
    )
}

interface IFormation {

    image: string,
    curso: string,
    escola: string,
    dataInicio: Date,
    dataFim?: Date,
    skills: string[]
}

function Formation (props: IFormation) {

    return(

        <motion.div
            initial={{
                opacity: 0
            }}

            whileInView={{
                opacity: 1,
            }}

            transition={{
                delay: 0,
                duration: 1
            }}

            viewport={{once: true}}

        className='relative w-full xl:max-w-[450px] flex flex-col bg-gradient-to-t from-blue-900 to-blue-800 mt-7 lg:mx-2 py-8 px-8 rounded-md shadow-md'>

            <div className='absolute m-auto -left-10 lg:left-0 lg:right-0 top-4 lg:-top-11 w-[15px] h-[15px] bg-white rounded-full border-4 border-blue-900'></div>
            <div className='absolute m-auto rotate-90 -left-[3.1rem] -left lg:left-0 lg:right-0 -top-10 lg:-top-20 text-center text-blue-900 font-bold'>{props.dataInicio.getFullYear()}</div>
            
            <div className='absolute m-auto top-4 lg:-top-2 -left-2 lg:left-0 lg:right-0 w-4 h-4 rotate-45 lg:rotate-45 bg-blue-800 '></div>

            <div className='flex items-center justify-center'>
                <img src={"/img/logos/" + props.image} alt={props.escola} className='bg-white w-[120px] h-[120px] object-contain rounded-full shadow-md' />
            </div>

            <div className='flex flex-col items-start mt-12 mb-8'>
                <h1 className='text-white text-base md:text-xl tracking-wider'>{props.curso}</h1>
                <h3 className='text-white text-sm md:text-base my-3'>{props.escola}</h3>
                {
                    props.dataFim ?
                    <p  className='text-gray-400 text-sm md:text-base italic capitalize'>{new Intl.DateTimeFormat('pt-PT', {month: 'long'}).format(props.dataInicio) + "-" + props.dataInicio.getFullYear()} / {new Intl.DateTimeFormat('pt-PT', {month: 'long'}).format(props.dataFim) + "-" + props?.dataFim.getFullYear()}</p>
                    :
                    <p  className='text-gray-400 text-sm md:text-base italic capitalize'>{new Intl.DateTimeFormat('pt-PT', {month: 'long'}).format(props.dataInicio) + "-" + props.dataInicio.getFullYear()} / <span className='font-bold'>atualmente</span></p>

                }
            </div>

            <ul className='w-[100%] flex flex-col justify-center list-disc pl-5'>

                {
                    props.skills.map((ele) => {

                        return (
                            <li className='text-white text-sm md:text-base py-1'>{ele}</li>
                        )
                    })
                }
                
            </ul>
        </motion.div>
    )
}