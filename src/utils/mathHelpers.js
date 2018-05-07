export const clamp = (val, min, max) => {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
};
