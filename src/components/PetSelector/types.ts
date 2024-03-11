import { Pet } from 'types/Pet'

export type PetSelectorProps = {
  onSelectPet: (nickname: string) => void
}

export type PetOptionProps = {
  pet: Pet
  onClick: () => void
  selected?: boolean
}
