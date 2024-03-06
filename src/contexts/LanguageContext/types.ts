import { Language, Translation } from '../../translations/types'

export type LanguageContextContent = {
	translation: Translation
	setLanguage: (language: Language) => void
}
