import { colours } from '../constants';

const PaperTheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: colours.blueDarker,
    accent: colours.green,
    background: colours.white,
    surface: colours.white,
    error: colours.redDark,
    text: colours.greyDarker,
    onBackground: colours.black,
    onSurface: colours.black,
    disabled: 'rgba(0, 0, 0, 0.26)',
    placeholder: 'rgba(0, 0, 0, 0.54)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: colours.red,
  },
  fonts: {
    regular: { fontWeight: '400' },
    medium: { fontWeight: '500' },
    light: { fontWeight: '300' },
    thin: { fontWeight: '100' },
  },
  animation: { scale: 1 },
};

export default PaperTheme;
