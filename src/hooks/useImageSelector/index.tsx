import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCamera } from 'hooks/useCamera'
import { useGallery } from 'hooks/useGallery'
import { Button } from 'components/Button'
import { Popup } from 'components/Popup'
import { imageSelectorStyles } from './styles'
import { useTheme } from 'contexts/ThemeContext'

export const useImageSelector = () => {
  const theme = useTheme()
  const [showImageSelector, setShowImageSelector] = useState<boolean>(false)
  const [image, setImage] = useState<string | null>(null)
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

  const ImageSelector = () => (
    <Popup visible={showImageSelector}>
      <View style={imageSelectorStyles.modal}>
        <Button
          text="Take a photo"
          onClick={() => {
            takePhoto()
            setShowImageSelector(false)
          }}
          backgroundColor={theme.primary}
          color={theme.white}
          hasShadow
        />
        <Button
          text="Pick an image from camera roll"
          onClick={() => {
            pickImage()
            setShowImageSelector(false)
          }}
          backgroundColor={theme.primary}
          color={theme.white}
          hasShadow
        />
      </View>
    </Popup>
  )

  return { ImageSelector, image, showImageSelector, setShowImageSelector }
}
