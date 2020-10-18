export const getCustomDate = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${checkZero(day)}.${checkZero(month)}.${year}`
};

const checkZero = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
}