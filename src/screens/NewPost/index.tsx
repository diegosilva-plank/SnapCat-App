import { Text } from 'react-native'
import React from 'react'
import { NewPostScreenProps } from './types'
import { ScreenLayout } from 'layouts/ScreenLayout'
import { ImageSelector } from 'components/ImageSelector'
import ImagePickerExample from 'components/ImagePicker'

export const NewPostScreen = ({ navigation }: NewPostScreenProps) => {
  return (
    <ScreenLayout navigation={navigation}>
      <Text>New Post</Text>
      <ImageSelector />
      <ImagePickerExample />
    </ScreenLayout>
  )
}
