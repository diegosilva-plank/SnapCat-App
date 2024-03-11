import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { NewPostScreenProps } from './types'
import { ScreenLayout } from 'layouts/ScreenLayout'
import { BackArrow } from 'components/BackArrow'
import { useTranslation } from 'contexts/LanguageContext'
import { useTheme } from 'contexts/ThemeContext'
import { Button } from 'components/Button'
import { useImageSelector } from 'hooks/useImageSelector'
import { PetSelector } from 'components/PetSelector'
import { newPostStylesHandler } from './styles'

const windowWidth = Dimensions.get('window').width
const imageWidth = windowWidth * 0.85

export const NewPostScreen = ({ navigation }: NewPostScreenProps) => {
  const { translation } = useTranslation()
  const theme = useTheme()
  const styles = newPostStylesHandler(imageWidth, theme)
  const { image, ImageSelector, setShowImageSelector } = useImageSelector()
  const [selectedPet, setSelectedPet] = useState<string>('')
  const [text, setText] = useState<string>('')

  useEffect(() => {
    console.log(selectedPet)
  }, [selectedPet])

  useEffect(() => {
    console.log(text)
  }, [text])

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
            numberOfLines={4}
            maxLength={200}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder={translation.newPostScreen.placeholder}
            placeholderTextColor={theme.terciary}
            style={{ fontSize: 16, padding: 10 }}
          />
        </View>
      </View>
    </ScreenLayout>
  )
}
