import { SafeAreaView, StyleSheet, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { TitleBar } from 'components/TitleBar'
import { NavBar } from 'components/NavBar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/App'

export const ScreenLayout = ({
  children,
  navigation,
  route,
}: PropsWithChildren<NativeStackScreenProps<RootStackParamList>>) => {
  const styles = stylesHandler()
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar />
      <View style={styles.content}>{children}</View>
      <View style={styles.navBarContainer}>
        <NavBar navigation={navigation} route={route} />
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
