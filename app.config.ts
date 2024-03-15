export default {
  extra: {
    apiUrl: process.env.API_URL,
    nativeNotifyAppId: process.env.NATIVE_NOTIFY_APP_ID,
    nativeNotifyAppToken: process.env.NATIVE_NOTIFY_APP_TOKEN,
    nativeNotifyApiUrl: process.env.NATIVE_NOTIFY_API_URL,
  },
  ios: {
    bundleIdentifier: 'com.diego-joinplank.snapcat',
  },
  android: {
    package: 'com.diegojoinplank.snapcat',
  },
}
