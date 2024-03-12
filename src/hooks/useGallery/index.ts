import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Platform } from 'react-native'

export const useGallery = () => {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: Platform.OS !== 'ios',
      aspect: [16, 9],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0])
    }
  }

  return { image, pickImage }
}
