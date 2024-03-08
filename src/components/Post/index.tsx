import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { PostProps } from './types'
import React from 'react'
import { Font } from 'hooks/useCustomFonts/types'
import { calculateTimePast } from 'utils/calculateTimePast'

const windowWidth = Dimensions.get('window').width
const SCREEN_PERCENTAGE = 0.9
const postWidht = windowWidth * SCREEN_PERCENTAGE

export const Post = ({ post }: PostProps) => {
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
          {calculateTimePast(post.createdUTCDateTime)}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: postWidht,
    alignItems: 'center',
    gap: 10,
  },
  media: {
    width: postWidht,
    height: (postWidht * 9) / 16,
    backgroundColor: 'lightgray',
    borderRadius: 20,
  },
  textContainer: {
    flexDirection: 'column',
    width: '90%',
  },
  textContent: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Font.Poppins_Regular,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
  },
  petContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nicknameText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Font.Poppins_Medium,
  },
  timeText: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: Font.Poppins_Regular,
  },
})
