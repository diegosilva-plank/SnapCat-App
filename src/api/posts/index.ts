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

export const createPostInApi = async (post: FormData) => {
  try {
    await fetch(ApiRoutes.createPost, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: post,
    })
  } catch (error) {
    console.error('Error creating post', error)
  }
}
