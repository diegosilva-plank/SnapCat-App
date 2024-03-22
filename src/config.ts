import Constants from 'expo-constants'

export const config = {
  apiUrl: Constants.expoConfig?.extra?.apiUrl,
  nativeNotifyAppId: Constants.expoConfig?.extra?.nativeNotifyAppId,
  nativeNotifyAppToken: Constants.expoConfig?.extra?.nativeNotifyAppToken,
  nativeNotifyApiUrl: Constants.expoConfig?.extra?.nativeNotifyApiUrl,
  graphqlUrl: Constants.expoConfig?.extra?.graphqlUrl,
}
