import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCamera } from 'hooks/useCamera'
import { useGallery } from 'hooks/useGallery'
import { Button } from 'components/Button'
import { imageSelectorStyles } from './styles'
import { useTheme } from 'contexts/ThemeContext'
import { useTranslation } from 'contexts/LanguageContext'
import { Popup } from 'components/Popup'
import { ImagePickerAsset } from 'expo-image-picker'

export const useImageSelector = (aspect: [number, number] = [16, 9]) => {
  const theme = useTheme()
  const { translation } = useTranslation()
  const [image, setImage] = useState<ImagePickerAsset | null>(null)
  const [showImageSelector, setShowImageSelector] = useState<boolean>(false)
  const { image: cameraImage, takePhoto } = useCamera(aspect)
  const { image: galleryImage, pickImage } = useGallery(aspect)

  useEffect(() => {
    if (cameraImage) {
      setImage(cameraImage)
    }
  }, [cameraImage])

  useEffect(() => {
    if (galleryImage) {
      setImage(galleryImage)
    }
  }, [galleryImage])

  const ImageSelector = () =>
    showImageSelector ? (
      <Popup
        setVisibility={(visibility: boolean) =>
          setShowImageSelector(visibility)
        }
      >
        <View style={imageSelectorStyles.modal}>
          <Button
            text={translation.imageSelection.camera}
            onClick={async () => {
              await takePhoto()
              setShowImageSelector(false)
            }}
            backgroundColor={theme.colors.primary}
            color={theme.colors.white}
            hasShadow
          />
          <Button
            text={translation.imageSelection.gallery}
            onClick={async () => {
              await pickImage()
              setShowImageSelector(false)
            }}
            backgroundColor={theme.colors.primary}
            color={theme.colors.white}
            hasShadow
          />
        </View>
      </Popup>
    ) : (
      <></>
    )

  return { ImageSelector, image, setShowImageSelector }
}
