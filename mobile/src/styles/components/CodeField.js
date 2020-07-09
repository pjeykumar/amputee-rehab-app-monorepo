import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { colours } from '../constants';

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 46,
    height: 44,
    lineHeight: 42,
    fontSize: 24,
    textAlign: 'center',
    shadowColor: colours.shadow,
    backgroundColor: colours.white,

    shadowOffset: {
      width: -1,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,

    elevation: 3,
  },
  focusCell: {
    borderColor: '#000',
  },
});

const Codefield = ({ codeLength, setValue, value }) => {
  const ref = useBlurOnFulfill({ value, cellCount: codeLength });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={codeLength}
      rootStyle={styles.codeFieldRoot}
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Text key={index} style={[styles.cell, isFocused && styles.focusCell]} onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

export default Codefield;
