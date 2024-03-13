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
      backgroundColor: theme.colors.gray,
      height: 50,
      borderRadius: 25,
      overflow: 'hidden',
    },
    petContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      paddingHorizontal: 7,
      borderRadius: 25,
    },
    profilePic: {
      width: 38,
      height: 38,
      borderRadius: 20,
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: Font.Poppins_Medium,
      marginHorizontal: 7,
    },
    textSkeleton: {
      width: 70,
      height: 15,
      borderRadius: 10,
      marginHorizontal: 7,
    },
    white: {
      color: theme.colors.white,
    },
    black: {
      color: theme.colors.text,
    },
    bgPrimary: {
      backgroundColor: theme.colors.primary,
    },
    bgGray: {
      backgroundColor: theme.colors.gray,
    },
  })
