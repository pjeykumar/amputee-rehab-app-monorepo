import { ColourScheme } from '../constants';

const PaperTheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: ColourScheme.blueDark,
    accent: ColourScheme.green,
    background: ColourScheme.white,
    surface: ColourScheme.white,
    error: ColourScheme.redDark,
    text: ColourScheme.greyDarker,
    onBackground: ColourScheme.black,
    onSurface: ColourScheme.black,
    disabled: 'rgba(0, 0, 0, 0.26)',
    placeholder: 'rgba(0, 0, 0, 0.54)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: ColourScheme.red,
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
