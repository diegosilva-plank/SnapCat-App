import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCamera } from 'hooks/useCamera'
import { useGallery } from 'hooks/useGallery'
import { Button } from 'components/Button'
import { Popup } from 'components/Popup'

export const ImageSelector = () => {
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {!image && (
        <Popup visible>
          <View style={styles.modal}>
            <Button
              text="Take a photo"
              onClick={takePhoto}
              backgroundColor="purple"
            />
            <Button
              text="Pick an image from camera roll"
              onClick={pickImage}
              backgroundColor="yellow"
            />
          </View>
        </Popup>
      )}
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 100,
    backgroundColor: 'grey',
  },
  modal: {
    width: '90%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 20,
    padding: 10,
    borderRadius: 4,
  },
})
