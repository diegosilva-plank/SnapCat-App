import { registerRootComponent } from 'expo'
import React from 'react'
import { LanguageContextProvider } from 'contexts/LanguageContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EnterScreen } from 'screens/Enter'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { useCustomFonts } from 'hooks/useCustomFonts'
import { Feed } from 'screens/Feed'
import { themes } from './themes'
import { Theme } from 'contexts/ThemeContext/types'
import { Appearance, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { NewPostScreen } from 'screens/NewPost'
import { NewPetScreen } from 'screens/NewPet'

export type RootStackParamList = {
  Enter: undefined
  Feed: { refresh?: boolean } | undefined
  NewPost: undefined
  NewPet: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  const [fontsLoaded] = useCustomFonts()
  if (!fontsLoaded) {
    return null
  }
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? themes.snapcatDark : themes.snapcat
  const styles = stylesHandler(theme)

  return (
    <LanguageContextProvider>
      <ThemeContextProvider theme={theme}>
        <SafeAreaView style={styles.wrapper}>
          <StatusBar
            backgroundColor={theme.colors.primary}
            barStyle="light-content"
          />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Enter"
              screenOptions={{
                headerShown: false,
                animation: 'none',
              }}
            >
              <Stack.Screen name="Enter" component={EnterScreen} />
              <Stack.Screen name="Feed" component={Feed} />
              <Stack.Screen name="NewPost" component={NewPostScreen} />
              <Stack.Screen name="NewPet" component={NewPetScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ThemeContextProvider>
    </LanguageContextProvider>
  )
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.primary,
      height: '100%',
    },
  })

export default registerRootComponent(App)
