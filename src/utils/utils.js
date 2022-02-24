export const capitalize = text =>
  text &&
  text
    .split(' ')
    .map(text => `${text[0].toUpperCase()}${text.slice(1)}`)
    .join(' ');
