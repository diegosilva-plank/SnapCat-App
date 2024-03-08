import { Text } from 'react-native'
import React from 'react'
import { NewPetScreenProps } from './types'
import { ScreenLayout } from 'src/layouts/ScreenLayout'

export const NewPetScreen = ({ navigation }: NewPetScreenProps) => {
  navigation
  return (
    <ScreenLayout navigation={navigation}>
      <Text>New Pet</Text>
    </ScreenLayout>
  )
}
