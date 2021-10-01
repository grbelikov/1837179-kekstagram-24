function randomInteger(valueFrom, valueTo) {
  // Функция, возвращающая случайное целое число из переданного диапазона включительно
  if ((valueFrom < 0) || (valueFrom >= valueTo)) {
    console.log('Проверьте правильность диапазона значений.');
    return;
  }

  // Cлучайное число от min до max
  const randomValue = valueFrom + Math.random() * (valueTo + 1 - valueFrom);
  return Math.floor(randomValue);
}

// Функция для проверки максимальной длины строки
function validateMaxLenghtString(enteredString, maxLenght=140) {
  return (enteredString.length <= maxLenght);
}

// вызываем, чтобы ESLint не ругался на неиспользуемые функции
randomInteger(5, 10);
validateMaxLenghtString('fdfdf', 10);
