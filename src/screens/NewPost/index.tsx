import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import { TitleBar } from 'components/TitleBar'
import { NewPostScreenProps } from './types'

export const NewPostScreen = ({ navigation }: NewPostScreenProps) => {
  navigation
  return (
    <SafeAreaView>
      <TitleBar />
      <Text>New Post</Text>
    </SafeAreaView>
  )
}
