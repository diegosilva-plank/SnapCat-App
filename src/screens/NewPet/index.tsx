import {
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

export const NewPetScreen = ({ navigation }: NewPetScreenProps) => {
  const { translation } = useTranslation()
  const theme = useTheme()
  const { image, ImageSelector, setShowImageSelector } = useImageSelector()
  const [name, setName] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
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
                  onChangeText={(text) => setNickname(text)}
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
          </View>
          {/* <Text style={styles.errorMessage}>{errorMessage}</Text> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenLayout>
  )
}
