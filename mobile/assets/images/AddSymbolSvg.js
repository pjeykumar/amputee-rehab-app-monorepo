import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function AddSymbolSvg(props) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" vertical-align="text-top" {...props}>
      <Path
        d="M6.583 3.083H5.417v2.334H3.083v1.166h2.334v2.334h1.166V6.583h2.334V5.417H6.583V3.083zM6 .167A5.835 5.835 0 00.167 6 5.835 5.835 0 006 11.833 5.835 5.835 0 0011.833 6 5.836 5.836 0 006 .167zm0 10.5A4.673 4.673 0 011.333 6 4.673 4.673 0 016 1.333 4.673 4.673 0 0110.667 6 4.673 4.673 0 016 10.667z"
        fill="red"
      />
    </Svg>
  );
}

export default AddSymbolSvg;
