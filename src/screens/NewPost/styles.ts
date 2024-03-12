import { Theme } from 'contexts/ThemeContext/types'
import { Font } from 'hooks/useCustomFonts/types'
import { StyleSheet } from 'react-native'

export const newPostStylesHandler = (imageWidth: number, theme: Theme) =>
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
    image: {
      width: imageWidth,
      height: (imageWidth * 9) / 16,
      borderRadius: 20,
      backgroundColor: theme.gray,
      justifyContent: 'center',
      alignItems: 'center',
    },
    petSelectorContainer: {
      flexDirection: 'column',
      width: '85%',
      gap: 10,
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: Font.Poppins_Regular,
      color: theme.black,
    },
    textInputContainer: {
      width: '85%',
      height: 100,
      borderRadius: 20,
      backgroundColor: theme.gray,
      padding: 10,
    },
    modal: {
      width: '90%',
      height: 200,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.white,
      borderRadius: 20,
      gap: 20,
    },
    postingText: {
      fontSize: 20,
      fontFamily: Font.Poppins_Regular,
      color: theme.black,
      textAlign: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '75%',
      gap: 10,
    },
    scrollContainer: {
      paddingBottom: 100,
    },
  })
