/* eslint-disable import/prefer-default-export */
export const shortenNumber = (num: number): string => {
  if (Math.floor(num / 10 ** 6) > 0) {
    return `${Math.floor(num / 10 ** 5) / 10}M`;
  }
  if (Math.floor(num / 10 ** 3) > 0) {
    return `${Math.floor(num / 10 ** 2) / 10}K`;
  }
  return num.toString();
};
