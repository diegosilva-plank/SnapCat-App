import { useTheme } from 'contexts/ThemeContext'
import { BackArrowProps } from './types'
import { Image, ImageSourcePropType, Pressable } from 'react-native'
import React from 'react'
import { BACK_ARROW_SIZE } from './consts'

export const BackArrow = ({ navigation }: BackArrowProps) => {
  const theme = useTheme()

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Image
        source={theme.icons.backArrow as ImageSourcePropType}
        style={{ width: BACK_ARROW_SIZE, height: BACK_ARROW_SIZE }}
      />
    </Pressable>
  )
}
