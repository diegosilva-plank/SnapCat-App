import { Text } from 'react-native'
import React from 'react'
import { NewPostScreenProps } from './types'
import { ScreenLayout } from 'layouts/ScreenLayout'

export const NewPostScreen = ({ navigation }: NewPostScreenProps) => {
  return (
    <ScreenLayout navigation={navigation}>
      <Text>New Post</Text>
    </ScreenLayout>
  )
}
