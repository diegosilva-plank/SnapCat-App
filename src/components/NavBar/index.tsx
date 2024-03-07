import { useTheme } from 'contexts/ThemeContext'
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import React from 'react'
import { Theme } from 'contexts/ThemeContext/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/App'

export const NavBar = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const theme = useTheme()
  const styles = stylesHandler(theme)

  return (
    <View style={[styles.wrapper, styles.bottomBar]}>
      <Pressable onPress={() => navigation.navigate('Feed')}>
        <Image
          source={theme.icons.home as ImageSourcePropType}
          style={{ width: 30, height: 30 }}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('NewPost')}>
        <Image
          source={theme.icons.addPost as ImageSourcePropType}
          style={{ width: 30, height: 30 }}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('NewPet')}>
        <Image
          source={theme.icons.addPet as ImageSourcePropType}
          style={{ width: 30, height: 30 }}
        />
      </Pressable>
    </View>
  )
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.primary,
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 70,
    },
    bottomBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  })
