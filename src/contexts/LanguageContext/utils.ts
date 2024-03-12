import { NativeModules, Platform } from 'react-native'
import { en, pt } from 'translations/languages'
import { Language, Translation } from 'translations/types'

export const getTranslation = (language: Language): Translation => {
  switch (language) {
    case Language.en:
      return en
    case Language.pt:
      return pt
    default:
      return en
  }
}

export const getDeviceLanguage = (): Language => {
  const deviceLanguage: string =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale // iOS
      : NativeModules.I18nManager.localeIdentifier // Android

  const language = deviceLanguage.split('_')[0]
  switch (language) {
    case 'en':
      return Language.en
    case 'pt':
      return Language.pt
    default:
      return Language.en
  }
}
