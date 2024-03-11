import { Theme } from 'contexts/ThemeContext/types'
import { Font } from 'hooks/useCustomFonts/types'
import { StyleSheet } from 'react-native'

export const petSelectorStyleHandler = (theme: Theme) =>
  StyleSheet.create({
    selectionBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      backgroundColor: theme.gray,
      height: 50,
      borderRadius: 25,
      overflow: 'hidden',
    },
    petContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      paddingHorizontal: 5,
      borderRadius: 25,
    },
    profilePic: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: Font.Poppins_Medium,
      marginHorizontal: 5,
    },
    white: {
      color: theme.white,
    },
    black: {
      color: theme.black,
    },
    bgPrimary: {
      backgroundColor: theme.primary,
    },
    bgGray: {
      backgroundColor: theme.gray,
    },
  })
