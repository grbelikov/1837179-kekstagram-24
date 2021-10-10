// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(valueFrom, valueTo) {
  if ((valueFrom < 0) || (valueFrom >= valueTo)) {
    return false;
  }
  // Cлучайное число от min до max
  const randomValue = valueFrom + Math.random() * (valueTo + 1 - valueFrom);
  return Math.floor(randomValue);
}

export {getRandomInteger};
