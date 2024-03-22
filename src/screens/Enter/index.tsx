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
      <Image
        source={theme.logos.enter as ImageSourcePropType}
        style={{ width: 300, height: 300 }}
      />
      <View style={style.button}>
        <Button
          text={translation.buttons.enter}
          backgroundColor={theme.colors.white}
          color={theme.colors.primary}
          isBold
          hasShadow
          onClick={() => {
            navigation.navigate('Feed', { refresh: true })
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.primary,
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: 250,
    },
  })
