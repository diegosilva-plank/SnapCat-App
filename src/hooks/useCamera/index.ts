import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Alert, Platform } from 'react-native'

export const useCamera = (aspect: [number, number] = [16, 9]) => {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null)

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()

    if (!granted) {
      Alert.alert(
        'Device settings alert',
        'You need to allow camera permissions for this to work',
      )
    }
  }

  const takePhoto = async () => {
    await requestPermission()
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: Platform.OS !== 'ios' || aspect[0] === aspect[1],
      aspect: aspect,
      quality: 0.3,
    })

    if (!result.canceled) {
      setImage(result.assets[0])
    }
  }

  return { image, takePhoto }
}
