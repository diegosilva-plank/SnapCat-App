import { Theme } from 'contexts/ThemeContext/types'

export const snapcatTheme: Theme = {
  primary: '#8A29E8',
  secondary: '#FAE360',
  terciary: '#8FBDDF',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#F0F1DF',
  skeleton: {
    primary: '#E0E0E0',
    secondary: '#D0D0D0',
  },
  logos: {
    enter: require('../../assets/SnapCat/logos/enter.png'),
    title: require('../../assets/SnapCat/logos/title.png'),
  },
  icons: {
    home: require('../../assets/SnapCat/icons/home.png'),
    addPost: require('../../assets/SnapCat/icons/add.png'),
    addPet: require('../../assets/SnapCat/icons/addcat.png'),
    backArrow: require('../../assets/SnapCat/icons/back-arrow.png'),
  },
}
