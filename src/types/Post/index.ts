import { Pet } from 'types/Pet'

export type Post = {
  createdUTCDateTime: string
  mediaUrl: string
  pet: Pet
  textContent: string
}
