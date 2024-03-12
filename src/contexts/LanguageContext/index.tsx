import React, { PropsWithChildren, useContext, useState } from 'react'
import { LanguageContextContent } from './types'
import { getDeviceLanguage, getTranslation } from './utils'
import { Language, Translation } from 'translations/types'

const initialLanguage = getDeviceLanguage()
const initialTranslation = getTranslation(initialLanguage)

const LanguageContext = React.createContext<LanguageContextContent>({
  translation: initialTranslation,
  setLanguage: () => {},
})

export const LanguageContextProvider = (props: PropsWithChildren) => {
  const [translation, setTranslation] =
    useState<Translation>(initialTranslation)
  const setLanguage = (language: Language) => {
    setTranslation(getTranslation(language))
  }

  return (
    <LanguageContext.Provider value={{ translation, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => useContext(LanguageContext)
