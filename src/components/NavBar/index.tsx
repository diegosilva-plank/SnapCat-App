import { useTheme } from 'contexts/ThemeContext'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
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
      <TouchableOpacity
        onPress={() => navigation.navigate('Feed')}
        style={styles.pressable}
        activeOpacity={0.7}
      >
        <Image
          source={theme.icons.home as ImageSourcePropType}
          style={{ width: NAVBAR_ICON_SIZE, height: NAVBAR_ICON_SIZE }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewPost')}
        style={styles.pressable}
        activeOpacity={0.7}
      >
        <Image
          source={theme.icons.addPost as ImageSourcePropType}
          style={{ width: NAVBAR_ICON_SIZE, height: NAVBAR_ICON_SIZE }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewPet')}
        style={styles.pressable}
        activeOpacity={0.7}
      >
        <Image
          source={theme.icons.addPet as ImageSourcePropType}
          style={{ width: NAVBAR_ICON_SIZE, height: NAVBAR_ICON_SIZE }}
        />
      </TouchableOpacity>
    </View>
  )
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.primary,
      height: NAVBAR_HEIGHT,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 45,
    },
    bottomBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    pressable: {
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
    },
  })
