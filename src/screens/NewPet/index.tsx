import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import { TitleBar } from 'components/TitleBar'
import { NewPetScreenProps } from './types'

export const NewPetScreen = ({ navigation }: NewPetScreenProps) => {
  navigation
  return (
    <SafeAreaView>
      <TitleBar />
      <Text>New Pet</Text>
    </SafeAreaView>
  )
}
