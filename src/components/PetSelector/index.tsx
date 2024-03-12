import { getPetsFromApi } from 'api/pets'
import { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { Pet } from 'types/Pet'
import React from 'react'
import { useTheme } from 'contexts/ThemeContext'
import { PetOptionProps, PetSelectorProps } from './types'
import { petSelectorStyleHandler } from './styles'
import { PetSelectorSkeleton } from './skeleton'

export const PetSelector = ({ onSelectPet }: PetSelectorProps) => {
  const [pets, setPets] = useState<Pet[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const theme = useTheme()
  const styles = petSelectorStyleHandler(theme)
  const [selectedPet, setSelectedPet] = useState<string>('')

  const getPets = async () => {
    const fetchedPets = await getPetsFromApi()
    setPets(fetchedPets)
    setSelectedPet(fetchedPets[0].nickname)
    onSelectPet(fetchedPets[0].nickname)
    setLoading(false)
  }

  useEffect(() => {
    getPets()
  }, [])

  return (
    <View style={styles.selectionBar}>
      {loading || !pets ? (
        <PetSelectorSkeleton />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={pets}
          renderItem={({ item }) => (
            <PetOption
              pet={item}
              onClick={() => {
                setSelectedPet(item.nickname)
                onSelectPet(item.nickname)
              }}
              selected={selectedPet === item.nickname}
            />
          )}
          keyExtractor={(item) => item.nickname}
        />
      )}
    </View>
  )
}

const PetOption = ({ pet, onClick, selected }: PetOptionProps) => {
  const theme = useTheme()
  const styles = petSelectorStyleHandler(theme)

  return (
    <Pressable onPress={onClick}>
      <View
        style={[
          styles.petContainer,
          selected ? styles.bgPrimary : styles.bgGray,
        ]}
      >
        <Image
          source={{ uri: pet.profilePictureUrl }}
          style={styles.profilePic}
        />
        <Text style={[styles.text, selected ? styles.white : styles.black]}>
          @{pet.nickname}
        </Text>
      </View>
    </Pressable>
  )
}