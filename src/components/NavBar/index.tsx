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
import { NavBarProps } from './types'
import { NAVBAR_HEIGHT, NAVBAR_ICON_SIZE } from './consts'

export const NavBar = ({ navigation }: NavBarProps) => {
  const theme = useTheme()
  const styles = stylesHandler(theme)

  return (
    <View style={[styles.wrapper, styles.bottomBar]}>
      <Pressable onPress={() => navigation.navigate('Feed')}>
        <Image
          source={theme.icons.home as ImageSourcePropType}
          style={{ width: NAVBAR_ICON_SIZE, height: NAVBAR_ICON_SIZE }}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('NewPost')}>
        <Image
          source={theme.icons.addPost as ImageSourcePropType}
          style={{ width: NAVBAR_ICON_SIZE, height: NAVBAR_ICON_SIZE }}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('NewPet')}>
        <Image
          source={theme.icons.addPet as ImageSourcePropType}
          style={{ width: NAVBAR_ICON_SIZE, height: NAVBAR_ICON_SIZE }}
        />
      </Pressable>
    </View>
  )
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.primary,
      height: NAVBAR_HEIGHT,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 75,
    },
    bottomBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  })
