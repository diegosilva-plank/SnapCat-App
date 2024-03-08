import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { FeedProps } from './types'
import { ScreenLayout } from 'layouts/ScreenLayout'
import { Post } from 'components/Post'
import { Post as PostType } from 'types/Post'
import { getPostsFromApi } from 'api/posts'

export const Feed = ({ navigation }: FeedProps) => {
  const [posts, setPosts] = React.useState<PostType[]>([])

  const getPosts = async () => {
    const fetchedPosts = await getPostsFromApi()
    setPosts(fetchedPosts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <ScreenLayout navigation={navigation}>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 20,
            paddingVertical: 20,
          }}
          data={posts}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={(item) => item.mediaUrl}
        />
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
