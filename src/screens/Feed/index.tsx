import { Text } from 'react-native'
import React from 'react'
import { FeedProps } from './types'
import { ScreenLayout } from 'src/layouts/ScreenLayout'

export const Feed = ({ navigation }: FeedProps) => {
  return (
    <ScreenLayout navigation={navigation}>
      <Text>Feed</Text>
    </ScreenLayout>
  )
}
