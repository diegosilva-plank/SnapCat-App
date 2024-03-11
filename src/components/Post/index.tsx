import { Dimensions, Image, Text, View } from 'react-native'
import { PostProps } from './types'
import React from 'react'
import { calculateTimePast } from 'utils/calculateTimePast'
import { postStylesHandler } from './styles'
import { useTranslation } from 'contexts/LanguageContext'
import { SCREEN_PERCENTAGE } from './consts'

const windowWidth = Dimensions.get('window').width
const postWidth = windowWidth * SCREEN_PERCENTAGE

export const Post = ({ post }: PostProps) => {
  const styles = postStylesHandler(postWidth)
  const { translation } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.petContainer}>
          <Image
            source={{ uri: post.pet.profilePictureUrl }}
            style={styles.profilePic}
          />
          <Text style={styles.nicknameText}>@{post.pet.nickname}</Text>
        </View>
        <Text style={styles.timeText}>
          {calculateTimePast(post.createdUTCDateTime, translation)}
        </Text>
      </View>
      <Image
        source={{ uri: post.mediaUrl }}
        style={styles.media}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>{post.textContent}</Text>
      </View>
    </View>
  )
}
