import {hasDuplicates} from './util.js';
import {ERROR_MESSAGES, MAX_STRING_LENGTH, MAX_AVALIABLE_HASHTAGS,
  MAX_LENGTH_HASHTAG} from './consts.js';

// Валидация комментария
const setInputComment = () => {
  const textDescriptionInput = document.querySelector('.text__description');
  const uploadSubmitButton = document.querySelector('#upload-submit');
  textDescriptionInput.style.outline = '';
  uploadSubmitButton.addEventListener('click', () => {
    const textComment = textDescriptionInput.value;

    if (textComment.length > MAX_STRING_LENGTH) {
      textDescriptionInput.setCustomValidity(ERROR_MESSAGES.errorMessageLenComment);
      textDescriptionInput.style.outline = '2px solid #ff0033';
    } else
    {
      textDescriptionInput.setCustomValidity('');
      textDescriptionInput.style.outline = '';
    }
  });
};


// работы с hashtag
const validateStringToUnacceptableSymbols = (stringToCheck) => {
  // У нас существует другая проверка на первый символ === #, так что отсечем его.
  // Иначе он будет подпадать под шаблон регекспа и придется писать доп. код
  stringToCheck = stringToCheck.slice(1);
  if (stringToCheck.length > 0) {
    const regexp = /[^а-я\w]/i;
    return regexp.test(stringToCheck);
  }
};

const validateHashtagsArray = (hashtagValuesArray) => {
  const textHashtagsInput = document.querySelector('.text__hashtags');

  document.querySelector('.text__hashtags').style.outline = '';
  let stringErrorMessages = '';
  textHashtagsInput.setCustomValidity('');

  if (hashtagValuesArray.length > MAX_AVALIABLE_HASHTAGS) {
    stringErrorMessages += ERROR_MESSAGES.errorMaxAmountHashtags;
  }
  if (hasDuplicates(hashtagValuesArray)) {
    stringErrorMessages += ERROR_MESSAGES.errorRepetitiveHashtah;
  }

  hashtagValuesArray.forEach((element) => {
    if (element[0] !== '#') {
      stringErrorMessages += ERROR_MESSAGES.errorFirstSymbol;
    }
    if (element === '#') {
      stringErrorMessages += ERROR_MESSAGES.errorMinSymbols;
    }

    if (element.length > MAX_LENGTH_HASHTAG) {
      stringErrorMessages += ERROR_MESSAGES.errorMaxLengthHashtag;
    }
    if (validateStringToUnacceptableSymbols(element)) {
      stringErrorMessages += ERROR_MESSAGES.errorWrongSymbols;
    }

    if (stringErrorMessages !== '') {
      textHashtagsInput.style.outline = '2px solid #ff0033';
      textHashtagsInput.setCustomValidity(stringErrorMessages);
    } else {
      textHashtagsInput.setCustomValidity('');
      textHashtagsInput.style.outline = '';
    }
  });
  // обнуляем массив
  hashtagValuesArray = [];
};

const setInputHashTag = () => {
  const textHashtagsInput = document.querySelector('.text__hashtags');
  const uploadSubmitButton = document.querySelector('#upload-submit');

  uploadSubmitButton.addEventListener('click', () => {
    let arrayHashtagsValues = [];
    // приводим к нижнему регистру
    arrayHashtagsValues = textHashtagsInput.value.toLowerCase().split(' ');
    // отфильтровываем, чтобы не попадали пустые значения '' в случае нажатия на пробел
    arrayHashtagsValues = arrayHashtagsValues.filter(Boolean);

    validateHashtagsArray(arrayHashtagsValues);
  });
};

export {setInputComment};
export {setInputHashTag};
