export default getTypeStyle = (props, constants) => {
  const types = Object.keys(props);
  const typesList = ['primary', 'secondary', 'tertiary', 'inverted'];

  const typesFiltered = types.filter((type) => typesList.includes(type));
  typesFiltered.sort((a, b) => {
    if (a === 'inverted') return -1;
    if (b === 'inverted') return 1;
    return 0;
  });
  if (typesFiltered.length > 1) {
    return typesFiltered.reduce((acc, next) => {
      if (!typesList.includes(acc)) return acc;
      if (acc === 'inverted') return constants[acc][next];
      return constants[acc];
    });
  }
  return constants[typesFiltered[0]];
};