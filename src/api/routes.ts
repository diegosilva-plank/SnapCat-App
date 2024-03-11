const SERVER_URL = process.env.API_URL

export const ApiRoutes = {
  getPosts: `${SERVER_URL}/post/get`,
  getPets: `${SERVER_URL}/pet/get`,
}
