import { Theme } from 'contexts/ThemeContext/types'

export const snapcatThemeDark: Theme = {
  colors: {
    primary: '#8A29E8',
    secondary: '#FAE360',
    terciary: '#FAE360',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#40413F',
    error: '#F06A8A',
    skeleton: {
      primary: '#606060',
      secondary: '#505050',
    },
    background: '#2F2F2F',
    text: '#FFFFFF',
    titlebar: '#8A29E8',
  },
  logos: {
    enter: require('../../assets/SnapCat/logos/enter.png'),
    title: require('../../assets/SnapCat/logos/title-white.png'),
  },
  icons: {
    home: require('../../assets/SnapCat/icons/home.png'),
    addPost: require('../../assets/SnapCat/icons/add.png'),
    addPet: require('../../assets/SnapCat/icons/addcat.png'),
    backArrow: require('../../assets/SnapCat/icons/back-arrow.png'),
    uploadCat: require('../../assets/SnapCat/icons/uploadcat.png'),
  },
}
