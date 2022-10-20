import React, { useEffect, useState } from 'react';
import About from './components/About';
import ButtonUp from './components/ButtonUp';
import Formations from './components/Formations';
import Header from './components/Header';
import Hero from './components/Hero';
import Experiences from "./components/Experiences";
import Footer from './components/Footer';
import { ILanguage } from './languages/ILanguage';
import { Portugues } from './languages/lang/Portugues';
import { English } from './languages/lang/English';
import { useCookies } from 'react-cookie';

const LanguageObj: any = {
  PT: Portugues,
  EN: English
}


function App() {

  //Linguagem Default PT
  //Caso não exista a Cokkie ele vai ativar PT
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
    <div className="relative flex flex-col bg-gray-50 overflow-x-hidden z-0">
      <Header language={language || {} as ILanguage} changeMainLanguage={changeLanguage}/>
      <Hero language={language || {} as ILanguage}/>
      <About language={language || {} as ILanguage}/>
      <Formations language={language || {} as ILanguage}/>
      <Experiences language={language || {} as ILanguage}/>
      <Footer language={language || {} as ILanguage}/>

      <ButtonUp />
      
    </div>
  );
}

export default App;
