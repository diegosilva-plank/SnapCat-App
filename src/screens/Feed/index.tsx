import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FeedProps } from './types'
import { ScreenLayout } from 'layouts/ScreenLayout'
import { Post } from 'components/Post'
import { fixturePost } from 'components/Post/fixtures'

export const Feed = ({ navigation }: FeedProps) => {
  return (
    <ScreenLayout navigation={navigation}>
      <View style={styles.container}>
        <Text>Feed</Text>
        <Post post={fixturePost} />
      </View>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
