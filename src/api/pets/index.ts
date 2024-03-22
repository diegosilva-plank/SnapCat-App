import { ApiRoutes } from 'api/routes'
import { GetPetsData } from './types'

export const getPetsFromApi = async () => {
  try {
    const response = await fetch(ApiRoutes.getPets, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const data = (await response.json()) as GetPetsData
    return data.pets
  } catch (error) {
    console.error('Error fetching pets', error)
    return []
  }
}

export const getPetsFromGraphQL = async () => {
  const response = await fetch(ApiRoutes.graphql, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          pets {
            createdUTCDateTime
            name
            nickname
            profilePictureUrl
          }
        }
      `,
    }),
  })
  const { data } = (await response.json()) as { data: GetPetsData }
  return data.pets
}

export const createPetInApi = async (pet: FormData) => {
  const response = await fetch(ApiRoutes.createPet, {
    method: 'POST',
    headers: {
      Accept: 'multipart/form-data',
      'Content-Type': 'multipart/form-data',
    },
    body: pet,
  })
  const data = await response.json()
  if (data.error) throw new Error(data.error)
}
