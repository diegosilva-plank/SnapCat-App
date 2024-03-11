import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import { NewPostScreenProps } from './types'
import { ScreenLayout } from 'layouts/ScreenLayout'
import { Font } from 'hooks/useCustomFonts/types'
import { BackArrow } from 'components/BackArrow'
import { useTranslation } from 'contexts/LanguageContext'
import { Theme } from 'contexts/ThemeContext/types'
import { useTheme } from 'contexts/ThemeContext'
import { Button } from 'components/Button'
import { useImageSelector } from 'hooks/useImageSelector'

const windowWidth = Dimensions.get('window').width
const imageWidth = windowWidth * 0.85

export const NewPostScreen = ({ navigation }: NewPostScreenProps) => {
  const { translation } = useTranslation()
  const theme = useTheme()
  const styles = stylesHandler(imageWidth, theme)
  const { image, ImageSelector, setShowImageSelector } = useImageSelector()

  return (
    <ScreenLayout navigation={navigation}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{translation.newPostScreen.title}</Text>
        <BackArrow navigation={navigation} />
      </View>
      <View style={styles.container}>
        <ImageSelector />
        {image ? (
          <Pressable onPress={() => setShowImageSelector(true)}>
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
          </Pressable>
        ) : (
          <View style={styles.image}>
            <Button
              text={translation.newPostScreen.selectImage}
              onClick={() => setShowImageSelector(true)}
              backgroundColor={theme.primary}
              color={theme.white}
            />
          </View>
        )}
      </View>
    </ScreenLayout>
  )
}

const stylesHandler = (imageWidth: number, theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 25,
    },
    title: {
      position: 'absolute',
      fontSize: 26,
      width: '100%',
      textAlign: 'center',
      fontFamily: Font.Poppins_SemiBold,
    },
    image: {
      width: imageWidth,
      height: (imageWidth * 9) / 16,
      borderRadius: 20,
      backgroundColor: theme.gray,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
