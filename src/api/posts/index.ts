import { ApiRoutes } from 'api/routes'
import { GetPostData } from './types'

export const getPostsFromApi = async () => {
  try {
    const response = await fetch(ApiRoutes.getPosts, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const data = (await response.json()) as GetPostData
    return data.posts
  } catch (error) {
    console.error('Error fetching posts', error)
    return []
  }
}

export const createPostInApi = async (post: FormData) => {
  try {
    const response = await fetch(ApiRoutes.createPost, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: post,
    })
    const data = await response.json()
    if (data.error) console.error(data.error)
  } catch (error) {
    console.error('Error creating post', error)
  }
}
