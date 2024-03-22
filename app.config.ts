export default {
  extra: {
    apiUrl: process.env.API_URL,
    graphqlUrl: process.env.GRAPHQL_URL,
    nativeNotifyAppId: process.env.NATIVE_NOTIFY_APP_ID,
    nativeNotifyAppToken: process.env.NATIVE_NOTIFY_APP_TOKEN,
    nativeNotifyApiUrl: process.env.NATIVE_NOTIFY_API_URL,
    eas: {
      projectId: 'a0fba31e-eb2b-4e06-aba9-63e7aef09386',
    },
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.diegojoinplank.SnapCat',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    permissions: ['android.permission.RECORD_AUDIO'],
    package: 'com.diegojoinplank.SnapCat',
    googleServicesFile: './google-services.json',
  },
  plugins: [
    [
      'expo-image-picker',
      {
        photosPermission:
          'The app accesses your photos to let you share them with your friends.',
      },
    ],
  ],
  name: 'SnapCat',
  slug: 'SnapCat',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  web: {
    favicon: './assets/favicon.png',
  },
}
