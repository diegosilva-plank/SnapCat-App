import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCamera } from 'hooks/useCamera'
import { useGallery } from 'hooks/useGallery'
import { Button } from 'components/Button'
import { imageSelectorStyles } from './styles'
import { useTheme } from 'contexts/ThemeContext'
import { useTranslation } from 'contexts/LanguageContext'
import { Popup } from 'components/Popup'

export const useImageSelector = () => {
  const theme = useTheme()
  const { translation } = useTranslation()
  const [image, setImage] = useState<string | null>(null)
  const [showImageSelector, setShowImageSelector] = useState<boolean>(false)
  const { image: cameraImage, takePhoto } = useCamera()
  const { image: galleryImage, pickImage } = useGallery()

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
            backgroundColor={theme.primary}
            color={theme.white}
            hasShadow
          />
          <Button
            text={translation.imageSelection.gallery}
            onClick={async () => {
              await pickImage()
              setShowImageSelector(false)
            }}
            backgroundColor={theme.primary}
            color={theme.white}
            hasShadow
          />
        </View>
      </Popup>
    ) : (
      <></>
    )

  return { ImageSelector, image, setShowImageSelector }
}
