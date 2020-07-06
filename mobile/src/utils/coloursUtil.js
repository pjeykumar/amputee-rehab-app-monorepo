import { colours } from '../styles/constants';

export const textColoursUtil = (props) => {
  if (props.inverted) {
    if (props.primary) {
      return colours.blueDarker;
    }
    if (props.secondary) {
      return colours.greyDark;
    }
    if (props.tertiary) {
      return colours.redDark;
    }
  }
  if (props.primary || props.tertiary) {
    return colours.yellowLighter;
  }
  if (props.secondary) {
    return colours.greyDarker;
  }
};
