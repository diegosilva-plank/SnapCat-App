import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { PropsWithChildren } from 'react'
import { RootStackParamList } from 'src/App'

export type NavigationType =
  | NativeStackNavigationProp<RootStackParamList, 'Enter', undefined>
  | NativeStackNavigationProp<RootStackParamList, 'Feed', undefined>
  | NativeStackNavigationProp<RootStackParamList, 'NewPost', undefined>
  | NativeStackNavigationProp<RootStackParamList, 'NewPet', undefined>

export type ScreenLayoutProps = PropsWithChildren<{
  navigation: NavigationType
}>
