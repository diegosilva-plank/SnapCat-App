import { useTheme } from 'contexts/ThemeContext'
import { useShimmer } from 'hooks/useShimmer'
import { petSelectorStyleHandler } from './styles'
import { Animated, View } from 'react-native'
import React from 'react'

export const PetSelectorSkeleton = () => {
  const theme = useTheme()
  const { shimmerStyle } = useShimmer()
  const styles = petSelectorStyleHandler(theme)

  return (
    <>
      <View style={[styles.petContainer, styles.bgPrimary]}>
        <Animated.View style={[styles.profilePic, shimmerStyle]} />
        <Animated.View style={[styles.textSkeleton, shimmerStyle]} />
      </View>
      <View style={[styles.petContainer, styles.bgGray]}>
        <Animated.View style={[styles.profilePic, shimmerStyle]} />
        <Animated.View style={[styles.textSkeleton, shimmerStyle]} />
      </View>
      <View style={[styles.petContainer, styles.bgGray]}>
        <Animated.View style={[styles.profilePic, shimmerStyle]} />
        <Animated.View style={[styles.textSkeleton, shimmerStyle]} />
      </View>
    </>
  )
}
