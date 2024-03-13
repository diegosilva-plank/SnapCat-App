import { Animated, Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { postStylesHandler } from './styles'
import { SCREEN_PERCENTAGE } from './consts'
import { useShimmer } from 'hooks/useShimmer'
import { useTheme } from 'contexts/ThemeContext'

const windowWidth = Dimensions.get('window').width
const postWidth = windowWidth * SCREEN_PERCENTAGE

export const PostSkeleton = () => {
  const { shimmerStyle } = useShimmer()

  const theme = useTheme()
  const styles = postStylesHandler(postWidth, theme)

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.petContainer}>
          <Animated.View style={[styles.profilePic, shimmerStyle]} />
          <Animated.View style={[skeletonStyles.nicknameText, shimmerStyle]} />
        </View>
        <Animated.View style={[skeletonStyles.timeText, shimmerStyle]} />
      </View>
      <Animated.View style={[styles.media, shimmerStyle]} />
      <View style={styles.textContainer}>
        <Animated.View style={[skeletonStyles.textContent, shimmerStyle]} />
      </View>
    </View>
  )
}

const skeletonStyles = StyleSheet.create({
  nicknameText: {
    width: 120,
    height: 12,
    borderRadius: 10,
  },
  timeText: {
    width: 100,
    height: 9,
    borderRadius: 10,
  },
  textContent: {
    width: 200,
    height: 12,
    borderRadius: 10,
  },
})
