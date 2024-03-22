import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Platform } from 'react-native'

export const useGallery = (aspect: [number, number] = [16, 9]) => {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: Platform.OS !== 'ios' || aspect[0] === aspect[1],
      aspect: aspect,
      quality: 0.3,
    })

    if (!result.canceled) {
      setImage(result.assets[0])
    }
  }

  return { image, pickImage }
}
