import { Animated, Dimensions, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { postStylesHandler } from './styles'
import { useTheme } from 'contexts/ThemeContext'
import { SCREEN_PERCENTAGE } from './consts'

const windowWidth = Dimensions.get('window').width
const postWidth = windowWidth * SCREEN_PERCENTAGE

export const PostSkeleton = () => {
  const theme = useTheme()
  const shimmerAnimation = useRef(new Animated.Value(0)).current
  useEffect(() => {
    const shimmer = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    )
    shimmer.start()
    return () => shimmer.stop()
  }, [])

  const shimmerStyle = {
    backgroundColor: shimmerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.skeleton.primary, theme.skeleton.secondary],
    }),
  }

  const styles = postStylesHandler(postWidth)

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
