import { ApiRoutes } from 'api/routes'
import { PushNotification } from './types'
import { config } from 'config'

export const sendPushNotification = async (notification: PushNotification) => {
  try {
    await fetch(ApiRoutes.nativeNotify, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appId: config.nativeNotifyAppId,
        appToken: config.nativeNotifyAppToken,
        ...notification,
      }),
    })
  } catch (error) {
    console.error('Error sending notification', error)
    return []
  }
}
