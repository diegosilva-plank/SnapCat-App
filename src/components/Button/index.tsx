import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonProps } from './types'
import { Font } from 'hooks/useCustomFonts/types'

export const Button = (props: ButtonProps) => {
  const styles = stylesHandler(props)
  const elevation = props.hasShadow ? styles.shadowProp : {}

  return (
    <Pressable onPress={props.onClick}>
      <View style={[styles.button, elevation]}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  )
}

const stylesHandler = (props: ButtonProps) =>
  StyleSheet.create({
    button: {
      backgroundColor: props.backgroundColor,
      width: '100%',
      paddingHorizontal: 15,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 5, height: 5 },
      shadowRadius: 2,
    },
    text: {
      color: props.color,
      fontSize: 16,
      lineHeight: 20,
      marginTop: 3,
      height: 'auto',
      fontFamily: Font.Poppins_Medium,
    },
    shadowProp: {
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 10,
      elevation: 5,
    },
  })
