import React, {useState, useEffect} from "react";
import LangEnglish from './../lang/en-UK.json';
import LangSpanish from './../lang/es-ES.json';
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({children}) => {
    let defaultLocale;
    let defaultWords;
    
    useEffect(() => {
        const lang = localStorage.getItem("lang");

        if (lang) {
            defaultLocale = lang;
    
            if (lang === "es-ES") {
                defaultWords = LangSpanish;
            } else {
                defaultWords = LangEnglish
                defaultLocale = "en-UK"
            }
        }
    }, [])

    

    const [words, setWords] = useState(defaultWords);
    const [locale, setLocale] = useState(defaultLocale);

    const changeLang = (newLang) => {
        switch(newLang){
            case "es-ES": 
                setWords(LangSpanish);
                setLocale("es-ES");  
                localStorage.setItem("lang", "es-ES");
                break;
            case "en-UK":
                setWords(LangEnglish);
                setLocale("en-UK");
                localStorage.setItem("lang", "en-UK");
                break;
            default:
                setWords(LangEnglish);
                setLocale("en-UK");
                localStorage.setItem("lang", "en-UK");
                
        }
    }


    return(
        <langContext.Provider value={{changeLang: changeLang, local: locale}}>
            <IntlProvider locale={locale} messages={words}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export {LangProvider, langContext}