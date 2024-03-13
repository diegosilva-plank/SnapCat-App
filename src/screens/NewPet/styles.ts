import { Theme } from 'contexts/ThemeContext/types'
import { Font } from 'hooks/useCustomFonts/types'
import { StyleSheet } from 'react-native'

export const newPetStylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 25,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 25,
    },
    title: {
      position: 'absolute',
      fontSize: 26,
      width: '100%',
      textAlign: 'center',
      fontFamily: Font.Poppins_SemiBold,
    },
    scrollContainer: {
      paddingBottom: 100,
    },
    errorMessage: {
      color: theme.error,
      fontSize: 14,
      fontFamily: Font.Poppins_Regular,
      textAlign: 'center',
      marginTop: 10,
    },
    image: {
      width: 250,
      height: 250,
      borderRadius: 125,
      backgroundColor: theme.gray,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      fontFamily: Font.Poppins_Regular,
      textAlign: 'center',
    },
    addProfilePicContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    },
  })
