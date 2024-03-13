import { ApiRoutes } from 'api/routes'

export const getPostsFromApi = async () => {
  try {
    const response = await fetch(ApiRoutes.getPosts, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return data.posts
  } catch (error) {
    console.error('Error fetching posts', error)
    return []
  }
}
