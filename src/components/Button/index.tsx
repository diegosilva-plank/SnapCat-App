import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ButtonProps } from './types'
import { Font } from 'hooks/useCustomFonts/types'

export const Button = (props: ButtonProps) => {
  const styles = stylesHandler(props)
  const elevation = props.hasShadow ? styles.shadowProp : {}

  return (
    <TouchableOpacity onPress={props.onClick} activeOpacity={0.8}>
      <View style={[styles.button, elevation]}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const stylesHandler = (props: ButtonProps) =>
  StyleSheet.create({
    button: {
      backgroundColor: props.backgroundColor,
      width: props.width || '100%',
      paddingHorizontal: 15,
      height: props.height || 40,
      borderRadius: props.height ? props.height / 2 : 20,
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
      fontFamily: props.font || Font.Poppins_Medium,
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
