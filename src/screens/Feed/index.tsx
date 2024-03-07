import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import { FeedProps } from './types'
import { TitleBar } from 'components/TitleBar'

export const Feed = ({ navigation }: FeedProps) => {
	navigation
	return (
		<SafeAreaView>
			<TitleBar />
			<Text>Feed</Text>
		</SafeAreaView>
	)
}
