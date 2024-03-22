import {
  FlatList,
  Platform,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native'
import React, { useEffect } from 'react'
import { FeedProps } from './types'
import { ScreenLayout } from 'layouts/ScreenLayout'
import { Post } from 'components/Post'
import { Post as PostType } from 'types/Post'
import { getPostsFromGraphQL } from 'api/posts'
import { PostSkeleton } from 'components/Post/skeleton'

export const Feed = ({ navigation, route }: FeedProps) => {
  const [posts, setPosts] = React.useState<PostType[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [refreshing, setRefreshing] = React.useState<boolean>(false)

  const getPosts = async () => {
    setLoading(true)
    const fetchedPosts = await getPostsFromGraphQL()
    const sortedPosts = fetchedPosts.sort(
      (a, b) =>
        new Date(b.createdUTCDateTime).getTime() -
        new Date(a.createdUTCDateTime).getTime(),
    )
    setPosts(sortedPosts)
    setLoading(false)
  }

  const onRefresh = async () => {
    setRefreshing(true)
    if (Platform.OS === 'android') {
      await getPosts()
      setRefreshing(false)
    }
  }

  const onScrollEndDrag = async () => {
    if (refreshing) {
      await getPosts()
      setRefreshing(false)
    }
  }

  useEffect(() => {
    if (route.params?.refresh) {
      getPosts()
      navigation.navigate('Feed', { refresh: false })
    }
  }, [route.params?.refresh])

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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            data={posts}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={(item) => item.mediaUrl}
            extraData={posts}
            onScrollEndDrag={onScrollEndDrag}
          />
        )}
      </View>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 20,
  },
})
