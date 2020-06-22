import colors from './ColorTheme';

const PaperTheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: colors.blueDark,
    accent: colors.green,
    background: colors.white,
    surface: colors.white,
    error: colors.redDark,
    text: colors.greyDarker,
    onBackground: colors.black,
    onSurface: colors.black,
    disabled: 'rgba(0, 0, 0, 0.26)',
    placeholder: 'rgba(0, 0, 0, 0.54)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: colors.red,
  },
  fonts: {
    regular: { fontFamily: 'Avenir', fontWeight: '400' },
    medium: { fontFamily: 'Avenir', fontWeight: '500' },
    light: { fontFamily: 'Avenir', fontWeight: '300' },
    thin: { fontFamily: 'Avenir', fontWeight: '100' },
  },
  animation: { scale: 1 },
};

export default PaperTheme;
