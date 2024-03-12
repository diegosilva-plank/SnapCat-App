import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'
import React from 'react'
import { EnterScreenProps } from './types'
import { useTheme } from 'contexts/ThemeContext'
import { useTranslation } from 'contexts/LanguageContext'
import { Button } from 'components/Button'
import { Theme } from 'contexts/ThemeContext/types'

export const EnterScreen = ({ navigation }: EnterScreenProps) => {
  const theme = useTheme()
  const style = stylesHandler(theme)
  const { translation } = useTranslation()

  return (
    <SafeAreaView style={style.wrapper}>
      <Image source={theme.logos.enter as ImageSourcePropType} />
      <View style={style.button}>
        <Button
          text={translation.buttons.enter}
          backgroundColor={theme.white}
          color={theme.primary}
          isBold
          hasShadow
          onClick={() => {
            navigation.navigate('Feed')
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.primary,
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: 250,
    },
  })
