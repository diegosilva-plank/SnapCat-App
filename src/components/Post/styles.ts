import { Theme } from 'contexts/ThemeContext/types'
import { Font } from 'hooks/useCustomFonts/types'
import { StyleSheet } from 'react-native'

export const postStylesHandler = (postWidth: number, theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      width: postWidth,
      alignItems: 'center',
      gap: 10,
    },
    media: {
      width: postWidth,
      height: (postWidth * 9) / 16,
      borderRadius: 20,
    },
    textContainer: {
      flexDirection: 'column',
      width: '90%',
    },
    textContent: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: Font.Poppins_Regular,
      color: theme.colors.text,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '95%',
    },
    petContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
    },
    profilePic: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    nicknameText: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: Font.Poppins_Medium,
      color: theme.colors.text,
    },
    timeText: {
      fontSize: 12,
      lineHeight: 20,
      fontFamily: Font.Poppins_Regular,
      color: theme.colors.text,
    },
  })
