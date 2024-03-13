import { useTheme } from 'contexts/ThemeContext'
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
import React from 'react'
import { Theme } from 'contexts/ThemeContext/types'

export const TitleBar = () => {
  const theme = useTheme()
  const styles = stylesHandler(theme)

  return (
    <View style={styles.container}>
      <Image
        source={theme.logos.title as ImageSourcePropType}
        style={{ width: 200, height: 60 }}
      />
    </View>
  )
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      top: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.titlebar,
      width: '100%',
      shadowColor: 'black',
      height: 80,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      elevation: 4,
      marginBottom: 3,
    },
  })
