import React, { FormEvent, useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

type Props = {}

export default function Footer({}: Props) {
    
    const [politica, setPolitica] = useState(false);

    const changePolitica = (value: boolean) => {

        setPolitica(value);
    }
    
    return (
        <>
            {
                politica === true ?
                <PoliticaPrivacidade onClose={changePolitica}/>
                : ''

            }
            <footer id='footer' className='relative bg-gray-900 z-10'>
                
                <div className='relative w-[90%] m-auto 3xl:w-[70%] flex flex-col justify-between p-4 z-0'>
                    <h1 className='text-white text-lg italic'>{"<"}Contactos{">"}</h1>
                    <div className='relative w-[100%] m-auto 3xl:w-[90%] flex flex-col items-center justify-center my-24 pt-4'>


                        <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 1, duration: 2}}
                        viewport={{once: true}}
                        className='w-full max-w-[600px] flex flex-col md:flex-row items-start md:items-center justify-between'>
                            <div className='flex flex-col justify-center mx-4 md:m-0 md:mb-4'>
                                <h5 className='text-white italic text-sm'>Meu Email:</h5>
                                <img src="/img/email.png" alt="" className='w-[300px]' />  
                            </div>

                            <ul className='flex items-baseline justify-center'>
                                <li>
                                    <SocialIcon 
                                        className='active:scale-125 hover:rotate-12 transition-all'
                                        url='https://www.linkedin.com/in/david-xavier-81b25421a/'
                                        bgColor='transparent'
                                        fgColor='white'
                                        target={"_blank"}
                                    />
                                </li>
                                <li>
                                    <SocialIcon 
                                        className='active:scale-125 hover:rotate-12 transition-all'
                                        url='https://github.com/FoxDead12'
                                        bgColor='transparent'
                                        fgColor='white'
                                        target={"_blank"}

                                    />
                                </li>
                                <li>
                                    <SocialIcon 
                                        className='active:scale-125 hover:rotate-12 transition-all'
                                        url='https://www.instagram.com/davidxavier002/'
                                        bgColor='transparent'
                                        fgColor='white'
                                        target={"_blank"}

                                    />
                                </li>
                            </ul>
                        </motion.div>
                    
                        <ContactForm openPolitica={changePolitica} />


                    </div>
                    <h1 className='text-white text-lg italic'>{"</"}Contactos{">"}</h1>
                    <h5 className='absolute m-auto bottom-2 w-full text-center text-gray-400 italic text-sm'>Made By @Me</h5>

                </div>

            </footer>
        </>

    )
}

interface IContactForm {

    openPolitica: (value: boolean) => void;
}

const ContactForm = (props: IContactForm) => {

    const [isFetching, setFetching] = useState(false);
    const [error, setError] = useState("");
    const [sucess, setSucess] = useState("")

    const [rgpd, setRGPD] = useState(false);

    const SendEmail = (e: FormEvent) => {

        e.preventDefault();
        
        const target = e.target as any;
        const name = target.name?.value || "";
        const email = target.email?.value || "";
        const message = target.message?.value || "";

        setFetching(true);
        setError("");
        setSucess("");

        emailjs.sendForm('service_8kjrn8i', 'template_vx7aomc', e.target as any, '2B4WCfsi8-krgrj-1')
        .then((result: any) => {
            
            setSucess("Email foi enviado com sucesso 😋!")
            setFetching(false);
            target.reset();

        }, (error: any) => {

            setError("Tente novamente, ocorreu algum erro 😓!")
            setFetching(false);
        });

    }

    return (

        <>

            {
                isFetching === true ?
                    <div className='fixed w-screen h-screen bg-gray-700 bg-opacity-40 z-[100] left-0 top-0 flex items-center justify-center'>
                    
                        <div className='w-12 h-12 border-4 border-t-gray-800 border-b-gray-800 border-l-transparent border-r-transparent rounded-full animate-spin'></div>

                    </div>
                : ''
            }
            
            <motion.form 
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.3}}
            onSubmit={(e) => SendEmail(e)} className='bg-gray-200 mt-8 p-4 w-full max-w-[600px] rounded-md shadow-md shadow-gray-500 flex flex-col justify-between text-center'>
                {
                    sucess != "" ?
                    <h2 className='text-green-600 font-bold text-lg border-2 border-green-600 mb-4 rounded-md'>{sucess}</h2> : ''
                }

                {
                    error != "" ?
                    <h2 className='text-red-600 font-bold text-lg border-2 border-red-600 mb-4 rounded-md'>{error}</h2>: ''
                }                
                <h1 className='text-lg md:text-2xl mb-4 font-bold uppercase text-gray-900'>Envie-me uma mensagem!!</h1>

                <input type="text" name='from_name' placeholder='Name' className='my-4 p-4 rounded-md shadow-md outline-gray-900'/>
                <input type="email" name='from_email' placeholder='Email' className='my-4 p-4 rounded-md shadow-md outline-gray-900'/>

                <textarea placeholder='Mensagem' name='message' rows={5} cols={40} className='my-4 p-4 rounded-md shadow-md outline-gray-900 resize-none'></textarea>

                <div className='flex items-center mb-4'>
                    <label className='text-gray-900 font-normal text-sm'>Eu li e concordo com o contrato de <span onClick={() => props.openPolitica(true)} className='text-blue-900 cursor-pointer hover:border-b-[1px] border-blue-900'>Política de Privacidade</span></label>
                    <input defaultChecked={false} type="checkbox" className='ml-2' onChange={(e) => setRGPD(!rgpd)} />
                </div>

                <button type='submit' disabled={rgpd == false ? true : false} className='bg-gray-900 p-4 text-base text-white uppercase font-bold rounded-md shadow-md disabled:bg-gray-500'>Enviar</button>
            </motion.form>
        </>
    )
}


interface IPoliticaPrivacidade {

    onClose: (value: boolean) => void;
}

const PoliticaPrivacidade = (props: IPoliticaPrivacidade) => {

    useEffect(() => {

        document.addEventListener("keydown", SpaceClose);
        return document.addEventListener("keydown", SpaceClose);
    })

    const SpaceClose = (e: KeyboardEvent) => {

        if(e.keyCode == 27) {

            props.onClose(false);
        }
    }

    return (
        <div className='fixed block w-screen h-screen left-0 top-0 bg-gray-700 bg-opacity-40 z-50'>
            
            <div className='flex items-start md:items-center justify-center w-full h-full overflow-y-scroll'>

                <div className='z-10 relative block w-full max-w-[500px] bg-gray-100 p-4 rounded-md shadow-md shadow-gray-500 left-0 top-0 bottom-0 right-0 m-4 '>
                    <h1 className='text-lg font-bold text-blue-900 border-b-[1.5px] border-gray-500 pb-4 mb-4 flex items-center justify-between'>
                        POLÍTICA DE PRIVACIDADE
                        <div onClick={() => props.onClose(false)} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </h1>
                    <p className='text-gray-900 text-sm md:text-base font-light font-sans'>
                        Esta declaração de garantia de privacidade de dados aplica-se especifica e exclusivamente ao serviço do site 'davidxavier.website'.<br/><br/>

                        Quando pedimos o seu nome, email, entre outros, temos como objetivo manter um relacionamento mais próximo com os nossos utilizadores. Com o seu registo, passamos a tratá-lo pelo seu nome próprio, ficamos mais próximos de si e podemos responder às suas necessidades ou pedidos com mais eficácia.
                        <br/><br/>
                        'davidxavier.website' respeita a privacidade de todos os seus utilizadores e garante que as informações fornecidas pelos utilizadores não serão utilizadas em nenhuma lista com fins promocionais, via correio eletrónico, nem serão divulgados a qualquer outra organização ou empresa. 'davidxavier.website' compromete-se ao uso de uma tecnologia suficientemente eficaz para que a sua experiência online seja de dia para dia mais segura e os seus relacionamentos na Web cada vez mais reforçados, recolhendo e tratando os dados de forma segura, impedindo a sua perda ou manipulação.
                        <br/><br/>
                        Os dados recolhidos pelo 'davidxavier.website' serão utilizados de acordo com o cumprimento da legislação aplicável sobre proteção de dados pessoais – Lei 67/98 de 26 de outubro, Lei de Proteção de Dados – de forma a que fique assegurada a confidencialidade e segurança dos dados pessoais fornecidos. Os mesmos destinam-se a ser usados para comunicação com os utilizadores, resposta a pedidos de informação.
                        <br/><br/>
                        Sobre qualquer questão que tenha relativa a este compromisso, não hesite em contactar-nos.
                    </p>
                </div>

            </div>
        </div>
    )
}