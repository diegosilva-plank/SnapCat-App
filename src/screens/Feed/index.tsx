import { Text } from 'react-native'
import React from 'react'
import { FeedProps } from './types'
import { ScreenLayout } from 'src/layouts/ScreenLayout'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/App'

export const Feed = ({ navigation, route }: FeedProps) => {
  return (
    <ScreenLayout
      navigation={
        navigation as unknown as NativeStackNavigationProp<
          RootStackParamList,
          string,
          undefined
        >
      }
    >
      <Text>Feed</Text>
    </ScreenLayout>
  )
}
