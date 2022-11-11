import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Header from '../components/Header';
import { ILanguage } from '../languages/ILanguage';
import { English } from '../languages/lang/English';
import { Portugues } from '../languages/lang/Portugues';

type Props = {}

const LanguageObj: any = {
    PT: Portugues,
    EN: English
}

export default function Projects({}: Props) {
    
    const [cookies, setCookie] = useCookies(['language']); //Variar entre PT / EN
    const [languageName, setLanguageName] = useState<string>("");
    const [language, setLanguage] = useState<ILanguage>();

    useEffect(() => {

        if(cookies.language) {
        setLanguage(LanguageObj[cookies.language])
        setLanguageName(cookies.language);
        }
        else {

        setCookie("language", "EN", {path: '/'})
        }

    }, [cookies])

    
    function changeLanguage(lg: string) {

        setCookie("language", lg, {path: "/", sameSite: "strict"})
    }
    
    return (
        <div className="relative flex flex-col bg-gray-50 z-0">
            <Header language={language || {} as ILanguage} changeMainLanguage={changeLanguage}/>
        </div>
    )
}