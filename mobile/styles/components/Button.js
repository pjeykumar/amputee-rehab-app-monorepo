import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import styled, { css } from '@emotion/native';
import colors from '../constants/ColorScheme';

// const StyledButton = styled(PaperButton)`
//   background-color: ${(props) => (props.primary ? colors.greenDark : colors.redDark)};
//   width: ${(props) => (props.small ? '200px' : '400px')};
// `;

// const StyledButton = styled(PaperButton)`
//   background-color: ${(props) => (props.primary ? colors.greenDark : colors.redDark)};

//   background-color: ${(props) => {
//     switch (props.theme) {
//       case 'primary':
//         return colors.greenDark;
//       case 'secondary':
//         return colors.redDark;
//       default:
//         return colors.blueDark;
//     }
//   }};

//   width: ${(props) => {
//     switch (props.size) {
//       case 'small':
//         return '50px';
//       case 'large':
//         return '200px';
//       default:
//         return '500px';
//     }
//   }};
// `;

// const StyledButton = styled(PaperButton)`
//   ${(props) =>
//     props.primary &&
//     css`
//       background-color: ${colors.greenDark};
//       padding: 20px;
//     }
//   `}

//   ${(props) =>
//     props.secondary &&
//     css`
//       background-color: ${colors.redDark};
//       padding: 40px;
//     }
//   `}

//   ${(props) =>
//     props.small &&
//     css`
//       width: 40px;
//     }
//   `}
// `;

const StyledButton = styled(PaperButton)`
  background-color: ${(props) => {
    if (props.primary) {
      return colors.greenDark;
    } else if (props.secondary) {
      return colors.redDark;
    } else {
      return colors.blueDark;
    }
  }};

  width: ${(props) => {
    if (props.small) {
      return '20px';
    } else if (props.large) {
      return '200px';
    } else {
      return '400px';
    }
  }};
`;

const Button = ({ children, mode = 'contained', color, onPress = () => {}, ...props }) => {
  return (
    <StyledButton mode={mode} color={color} onPress={onPress} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
