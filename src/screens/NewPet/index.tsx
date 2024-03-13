import {
  Image,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native'
import React from 'react'
import { NewPetScreenProps } from './types'
import { ScreenLayout } from 'layouts/ScreenLayout'
import { useTranslation } from 'contexts/LanguageContext'
import { useTheme } from 'contexts/ThemeContext'
import { useImageSelector } from 'hooks/useImageSelector'
import { newPetStylesHandler } from './styles'
import { BackArrow } from 'components/BackArrow'

export const NewPetScreen = ({ navigation }: NewPetScreenProps) => {
  const { translation } = useTranslation()
  const theme = useTheme()
  const { image, ImageSelector, setShowImageSelector } = useImageSelector()
  const styles = newPetStylesHandler(theme)

  return (
    <ScreenLayout navigation={navigation}>
      <KeyboardAvoidingView behavior="position">
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{translation.newPetScreen.title}</Text>
            <BackArrow navigation={navigation} />
          </View>
          <View style={styles.container}>
            <ImageSelector />
            <Pressable
              style={styles.addProfilePicContainer}
              onPress={() => setShowImageSelector(true)}
            >
              {image ? (
                <Image
                  source={{ uri: image.uri }}
                  style={styles.image}
                  resizeMode="cover"
                />
              ) : (
                <Image
                  source={theme.icons.uploadCat as ImageSourcePropType}
                  style={styles.image}
                  resizeMode="cover"
                />
              )}
              <Text style={styles.text}>
                {translation.newPetScreen.addProfilePicture}
              </Text>
            </Pressable>
          </View>
          {/* <Text style={styles.errorMessage}>{errorMessage}</Text> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenLayout>
  )
}
