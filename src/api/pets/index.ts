import { ApiRoutes } from 'api/routes'

export const getPetsFromApi = async () => {
  try {
    const response = await fetch(ApiRoutes.getPets, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return data.pets
  } catch (error) {
    console.error('Error fetching pets', error)
    return []
  }
}
