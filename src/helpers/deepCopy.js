/* eslint-disable */
export const deepCopy = (o) => {
  let copy = o;
  let k;

  if (o && typeof o === 'object') {
    copy = Object.prototype.toString.call(o) === '[object Array]' ? [] : {};
    for (k in o) {
      copy[k] = deepCopy(o[k]);
    }
  }
  return copy;
};
/* eslint-enable */
