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

export const getPostsFromGraphQL = async () => {
  const response = await fetch(ApiRoutes.graphql, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          posts {
            createdUTCDateTime
            mediaUrl
            pet {
              nickname
              profilePictureUrl
            }
            textContent
          }
        }
      `,
    }),
  })
  const { data } = (await response.json()) as { data: GetPostData }
  return data.posts
}

export const createPostInApi = async (post: FormData) => {
  try {
    const response = await fetch(ApiRoutes.createPost, {
      method: 'POST',
      headers: {
        Accept: 'multipart/form-data',
        'Content-Type': 'multipart/form-data',
      },
      body: post,
    })
    if (response.status !== 200) throw new Error('Request failed')
  } catch (error) {
    console.error('Error creating post', error)
  }
}
