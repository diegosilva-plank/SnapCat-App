import {
  ActivityIndicator,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { NewPostScreenProps } from './types'
import { BackArrow } from 'components/BackArrow'
import { useTranslation } from 'contexts/LanguageContext'
import { useTheme } from 'contexts/ThemeContext'
import { Button } from 'components/Button'
import { useImageSelector } from 'hooks/useImageSelector'
import { PetSelector } from 'components/PetSelector'
import { newPostStylesHandler } from './styles'
import { createPostInApi } from 'api/posts'
import { Popup } from 'components/Popup'
import { Font } from 'hooks/useCustomFonts/types'
import { sendPushNotification } from 'api/nativeNotify'
import { ScreenLayout } from 'src/layouts/ScreenLayout'

const windowWidth = Dimensions.get('window').width
const imageWidth = windowWidth * 0.85

export const NewPostScreen = ({ navigation }: NewPostScreenProps) => {
  const { translation } = useTranslation()
  const theme = useTheme()
  const styles = newPostStylesHandler(imageWidth, theme)
  const { image, ImageSelector, setShowImageSelector } = useImageSelector()
  const [selectedPet, setSelectedPet] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [posting, setPosting] = useState<boolean>(false)

  const createPost = async () => {
    if (image) {
      const post = new FormData()
      const extension = image.uri.split('.').slice(-1)
      post.append('media', {
        uri: image.uri,
        name: image.fileName ?? `image.${extension ?? 'jpg'}`,
        type: `image/${extension ?? 'jpg'}`,
      } as unknown as Blob)
      post.append('petPublicId', selectedPet)
      post.append('textContent', text)
      setPosting(true)
      await createPostInApi(post)
      await sendPushNotification({
        title: translation.notifications.newPost.title,
        body: translation.notifications.newPost.body(selectedPet),
        dateSent: new Date().toISOString(),
        bigPictureURL: image.uri,
      })
      setPosting(false)
      navigation.navigate('Feed', { refresh: true })
    } else {
      setErrorMessage(translation.newPostScreen.errorMessage)
    }
  }

  return (
    <ScreenLayout navigation={navigation}>
      {posting && (
        <Popup
          setVisibility={(visibility: boolean) => setPosting(visibility)}
          disableClose
        >
          <View style={styles.modal}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
            <Text style={styles.postingText}>
              {translation.newPostScreen.positng}
            </Text>
          </View>
        </Popup>
      )}
      <KeyboardAvoidingView behavior="position">
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{translation.newPostScreen.title}</Text>
            <BackArrow navigation={navigation} />
          </View>
          <View style={styles.container}>
            <ImageSelector />
            {image ? (
              <Pressable onPress={() => setShowImageSelector(true)}>
                <Image
                  source={{ uri: image.uri }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </Pressable>
            ) : (
              <View style={styles.image}>
                <Button
                  text={translation.newPostScreen.selectImage}
                  onClick={() => {
                    setShowImageSelector(true)
                  }}
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                />
              </View>
            )}
            <View style={styles.petSelectorContainer}>
              <Text style={styles.text}>
                {translation.newPostScreen.petSelector}
              </Text>
              <PetSelector
                onSelectPet={(nickname: string) => setSelectedPet(nickname)}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                editable
                multiline
                maxLength={200}
                onChangeText={(text) => setText(text)}
                value={text}
                placeholder={translation.newPostScreen.placeholder}
                placeholderTextColor={theme.colors.terciary}
                style={{
                  fontSize: 16,
                  padding: 10,
                  color: theme.colors.text,
                }}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                text={translation.buttons.cancel}
                onClick={navigation.goBack}
                backgroundColor={theme.colors.white}
                color={theme.colors.primary}
                font={Font.Poppins_Bold}
                height={45}
                width={120}
              />
              <Button
                text={translation.buttons.add}
                onClick={createPost}
                backgroundColor={theme.colors.primary}
                color={theme.colors.white}
                font={Font.Poppins_Bold}
                height={45}
                width={120}
              />
            </View>
          </View>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenLayout>
  )
}
