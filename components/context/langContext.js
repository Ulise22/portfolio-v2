import React, { useState } from 'react'
import LangEnglish from './../lang/en-UK.json'
import LangSpanish from './../lang/es-ES.json'
import { IntlProvider } from 'react-intl'

const langContext = React.createContext()

const LangProvider = ({ children }) => {
  const [words, setWords] = useState(LangSpanish)
  const [locale, setLocale] = useState('es-ES')

  const changeLang = (newLang) => {
    switch (newLang) {
      case 'es-ES':
        setWords(LangSpanish)
        setLocale('es-ES')
        break
      case 'en-UK':
        setWords(LangEnglish)
        setLocale('en-UK')
        break
      default:
        setWords(LangEnglish)
        setLocale('en-UK')
    }
  }

  return (
    <langContext.Provider value={{ changeLang, local: locale }}>
      <IntlProvider locale={locale} messages={words}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  )
}

export { LangProvider, langContext }
