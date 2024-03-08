import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { TitleBar } from 'components/TitleBar'
import { NavBar } from 'components/NavBar'
import { ScreenLayoutProps } from './types'

export const ScreenLayout = ({ children, navigation }: ScreenLayoutProps) => {
  const styles = stylesHandler()
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

const stylesHandler = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    navBarContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  })
