import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { FeedProps } from './types'
import { ScreenLayout } from 'layouts/ScreenLayout'
import { Post } from 'components/Post'
import { Post as PostType } from 'types/Post'
import { getPostsFromApi } from 'api/posts'
import { PostSkeleton } from 'components/Post/skeleton'

export const Feed = ({ navigation }: FeedProps) => {
  const [posts, setPosts] = React.useState<PostType[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  const getPosts = async () => {
    const fetchedPosts = await getPostsFromApi()
    setPosts(fetchedPosts)
    setLoading(false)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <ScreenLayout navigation={navigation}>
      <View style={styles.container}>
        {loading ? (
          <View style={styles.contentContainer}>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            data={posts}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={(item) => item.mediaUrl}
          />
        )}
      </View>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 20,
  },
})
