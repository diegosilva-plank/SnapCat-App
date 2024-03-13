import { useTheme } from 'contexts/ThemeContext'
import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

export const useShimmer = () => {
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
      outputRange: [
        theme.colors.skeleton.primary,
        theme.colors.skeleton.secondary,
      ],
    }),
  }

  return { shimmerStyle }
}
