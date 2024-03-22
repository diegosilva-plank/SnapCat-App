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
      color: theme.colors.text,
    },
    scrollContainer: {
      paddingBottom: 100,
    },
    errorMessage: {
      color: theme.colors.error,
      fontSize: 14,
      fontFamily: Font.Poppins_Regular,
      textAlign: 'center',
      marginTop: -10,
      width: '80%',
    },
    image: {
      width: 250,
      height: 250,
      borderRadius: 125,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      fontFamily: Font.Poppins_Regular,
      textAlign: 'center',
      color: theme.colors.text,
    },
    addProfilePicContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    },
    textInputContainer: {
      width: '80%',
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.gray,
      padding: 10,
    },
    inputsContainer: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 15,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '75%',
      gap: 10,
    },
    modal: {
      width: '90%',
      height: 200,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.white,
      borderRadius: 20,
      gap: 20,
    },
    postingText: {
      fontSize: 20,
      fontFamily: Font.Poppins_Regular,
      color: theme.colors.black,
      textAlign: 'center',
    },
  })
