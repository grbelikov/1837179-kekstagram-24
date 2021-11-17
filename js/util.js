import {ALERT_SHOW_TIME} from './consts.js';

// Функция проверки в массиве повторяющихся значений
const hasDuplicates = (arrayToCheck) => (new Set(arrayToCheck)).size !== arrayToCheck.length;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '15px 3px';
  alertContainer.style.fontSize = '35px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = '#1e1e1e';
  alertContainer.style.backgroundColor = '#f4d100';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {showAlert};
export {hasDuplicates};
