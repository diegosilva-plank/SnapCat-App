import { ApiRoutes } from 'api/routes'

export const getPostsFromApi = async () => {
  try {
    const response = await fetch(ApiRoutes.getPosts)
    const data = await response.json()
    return data.posts
  } catch (error) {
    console.error('Error fetching posts', error)
    return []
  }
}
