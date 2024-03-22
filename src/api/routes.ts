import { config } from 'config'

export const ApiRoutes = {
  getPosts: `${config.apiUrl}/post/get`,
  getPets: `${config.apiUrl}/pet/get`,
  createPost: `${config.apiUrl}/post/create`,
  createPet: `${config.apiUrl}/pet/create`,
  nativeNotify: `${config.nativeNotifyApiUrl}`,
  graphql: `${config.graphqlUrl}`,
}
