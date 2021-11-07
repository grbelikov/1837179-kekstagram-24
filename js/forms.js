import {setBodyModalOpen} from './full-size-image.js';
import {removeHiddenTag} from './full-size-image.js';
import {hideElement} from './full-size-image.js';
import {hasDuplicates} from './util.js';
import {scaleImage} from './image-effects.js';

const errorMessages = {
  errorMaxAmountHashtags: 'нельзя указать больше пяти хэш-тегов',
  errorRepetitiveHashtah: 'имеются повторяющиеся хэштеги',
  errorFirstSymbol:       'хэштег должен начинаться с #',
  errorMinSymbols:        'хэштег не может состоять только из одной решётки',
  errorMaxLengthHashtag:  'максимальная длина одного хэштега 20 символов',
  errorWrongSymbols:      'хэштег может содержать только цифры, буквы и нижнее подчеркивание',
};

// работы с полем хэштег
// ??????????????????????????????????????
const checkStatusInFocus = (elemToCheckFocus) => {
  // если в фокусе поле с хэштегом, убираем закрытие по кнопке ESC
  // p.s. не работает. не понимаю, как реализовать.
  const imgUploadCancel = document.querySelector('.img-upload__cancel');
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');

  elemToCheckFocus.onfocus = () => {
    hideElement(imgUploadOverlay, imgUploadCancel, true);
    console.log('hashtag');
  };
  elemToCheckFocus.onblur = () => {
    hideElement(imgUploadOverlay, imgUploadCancel, false);
    console.log('comment');
  };
};

//?????????????? как сбрасывать значение поля выбора файла #upload-file?
const activateUploadImage = () => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const imgUploadInput = document.querySelector('#upload-file');
  const textHashtags = document.querySelector('.text__hashtags');

  imgUploadInput.addEventListener('change', () => {
    setBodyModalOpen();
    removeHiddenTag(imgUploadOverlay);

    checkStatusInFocus(textHashtags);
  });
};

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
  const submitButton = document.querySelector('#upload-submit');

  submitButton.addEventListener('click', () => {
    submitButton.setCustomValidity('');

    if (hashtagValuesArray.length > 5) {
      submitButton.setCustomValidity(errorMessages.errorMaxAmountHashtags);
    }
    if (hasDuplicates(hashtagValuesArray)) {
      submitButton.setCustomValidity(errorMessages.errorRepetitiveHashtah);
    }

    hashtagValuesArray.forEach((element) => {
      if (element[0] !== '#') {
        submitButton.setCustomValidity(errorMessages.errorFirstSymbol);
      } else if (element.length < 2) {
        submitButton.setCustomValidity(errorMessages.errorMinSymbols);
      }
      if (element.length > 20) {
        submitButton.setCustomValidity(errorMessages.errorMaxLengthHashtag);
      }
      if (validateStringToUnacceptableSymbols(element)) {
        submitButton.setCustomValidity(errorMessages.errorWrongSymbols);
      }
// ?????? почему-то не работает на ходу
      // submitButton.reportValidity();
    });
  });
};

const collectUserHashtagInput = () => {
  const textHashtags = document.querySelector('.text__hashtags');

  textHashtags.addEventListener('input', () => {
    let arrayHashtagsValues = [];
    // приводим к нижнему регистру
    arrayHashtagsValues = textHashtags.value.toLowerCase().split(' ');

    // отфильтровываем, чтобы не попадали пустые значения '' в случае нажатия на пробел
    arrayHashtagsValues = arrayHashtagsValues.filter(Boolean);

    validateHashtagsArray(arrayHashtagsValues);
  });
};

// работы с полем комментария
const validateComment = (comment) => {
  const errorMessageLengthComment = 'Длина комментария не может составлять больше 140 символов';
  const submitButton = document.querySelector('#upload-submit');

  submitButton.addEventListener('click', () => {
    const MAX_STRING_LENGTH = 140;

    if (comment.length > MAX_STRING_LENGTH) {
      submitButton.setCustomValidity(errorMessageLengthComment);
    }
// ?????? почему-то не работает на ходу
      // submitButton.reportValidity();
  });
};

const validateCommentInput = () => {
  const textDescription = document.querySelector('.text__description');

  textDescription.addEventListener('input', () => {
    const textComment = textDescription.value;
    checkStatusInFocus(textDescription);

    validateComment(textComment);
  });
};


collectUserHashtagInput();
validateCommentInput();
scaleImage();

export {activateUploadImage};
