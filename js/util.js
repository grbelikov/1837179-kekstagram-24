// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = (valueFrom, valueTo) => {
  if ((valueFrom < 0) || (valueFrom >= valueTo)) {
    return false;
  }
  // Cлучайное число от min до max
  const randomValue = valueFrom + Math.random() * (valueTo + 1 - valueFrom);
  return Math.floor(randomValue);
};

// Функция проверки в массиве повторяющихся значений
const hasDuplicates = (arrayToCheck) => (new Set(arrayToCheck)).size !== arrayToCheck.length;

export {getRandomInteger};
export {hasDuplicates};
