import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { NewPetScreenProps } from './types'
import { ScreenLayout } from 'layouts/ScreenLayout'
import { useTranslation } from 'contexts/LanguageContext'
import { useTheme } from 'contexts/ThemeContext'
import { useImageSelector } from 'hooks/useImageSelector'
import { newPetStylesHandler } from './styles'
import { BackArrow } from 'components/BackArrow'
import { createPetInApi } from 'api/pets'
import { Font } from 'hooks/useCustomFonts/types'
import { Button } from 'components/Button'
import { Popup } from 'components/Popup'

export const NewPetScreen = ({ navigation }: NewPetScreenProps) => {
  const { translation } = useTranslation()
  const theme = useTheme()
  const { image, ImageSelector, setShowImageSelector } = useImageSelector([
    1, 1,
  ])
  const [name, setName] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const styles = newPetStylesHandler(theme)
  const [posting, setPosting] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const createPet = async () => {
    if (image && name && nickname) {
      const pet = new FormData()
      const extension = image.uri.split('.').slice(-1)
      pet.append('profilePicture', {
        uri: image.uri,
        name: image.fileName ?? `image.${extension ?? 'jpg'}`,
        type: `image/${extension ?? 'jpg'}`,
      } as unknown as Blob)
      pet.append('name', name)
      pet.append('nickname', nickname)
      setPosting(true)
      try {
        await createPetInApi(pet)
        setPosting(false)
        navigation.navigate('NewPost')
      } catch (error) {
        const errorMessage = (error as Error).message
        if (errorMessage.split(' ')[0] === 'E11000') {
          setErrorMessage(translation.newPetScreen.nicknameInUse)
        } else {
          setErrorMessage(errorMessage)
        }
        setPosting(false)
      }
    } else {
      setErrorMessage(translation.newPetScreen.errorMessage)
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
            <ActivityIndicator size="large" color={theme.primary} />
            <Text style={styles.postingText}>
              {translation.newPetScreen.positng}
            </Text>
          </View>
        </Popup>
      )}
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
            <View style={styles.inputsContainer}>
              <View style={styles.textInputContainer}>
                <TextInput
                  editable
                  maxLength={50}
                  onChangeText={(text) => setName(text)}
                  value={name}
                  placeholder={translation.newPostScreen.nameInput}
                  placeholderTextColor={theme.terciary}
                  style={{
                    fontSize: 16,
                    paddingHorizontal: 10,
                  }}
                />
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  editable
                  maxLength={50}
                  onChangeText={(text) =>
                    setNickname(
                      text.replace(
                        /[ `~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi,
                        '',
                      ),
                    )
                  }
                  value={nickname}
                  placeholder={translation.newPostScreen.nicknameInput}
                  placeholderTextColor={theme.terciary}
                  style={{
                    fontSize: 16,
                    paddingHorizontal: 10,
                  }}
                />
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                text={translation.buttons.cancel}
                onClick={navigation.goBack}
                backgroundColor={theme.white}
                color={theme.primary}
                font={Font.Poppins_Bold}
                height={45}
                width={120}
              />
              <Button
                text={translation.buttons.add}
                onClick={createPet}
                backgroundColor={theme.primary}
                color={theme.white}
                font={Font.Poppins_Bold}
                height={45}
                width={120}
              />
            </View>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenLayout>
  )
}
