import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { TitleBar } from 'components/TitleBar'
import { NavBar } from 'components/NavBar'
import { ScreenLayoutProps } from './types'
import { NAVBAR_HEIGHT } from 'components/NavBar/consts'
import { Theme } from 'contexts/ThemeContext/types'
import { useTheme } from 'contexts/ThemeContext'

export const ScreenLayout = ({ children, navigation }: ScreenLayoutProps) => {
  const theme = useTheme()
  const styles = stylesHandler(theme)
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar />
      <View style={styles.content}>{children}</View>
      <View style={styles.navBarContainer}>
        <NavBar navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
      paddingBottom: NAVBAR_HEIGHT,
      overflow: 'hidden',
    },
    navBarContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  })
