import { useTheme } from 'contexts/ThemeContext'
import { BackArrowProps } from './types'
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React from 'react'
import { BACK_ARROW_SIZE } from './consts'

export const BackArrow = ({ navigation }: BackArrowProps) => {
  const theme = useTheme()

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
      <Image
        source={theme.icons.backArrow as ImageSourcePropType}
        style={{ width: BACK_ARROW_SIZE, height: BACK_ARROW_SIZE }}
      />
    </TouchableOpacity>
  )
}
