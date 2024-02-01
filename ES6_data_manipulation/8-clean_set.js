export default function cleanSet(set, startString) {
  if (!startString || startString === '') {
    return '';
  }
  if (typeof startString !== 'string') {
    return '';
  }
  let result = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  });
  return result.slice(0, -1);
}
