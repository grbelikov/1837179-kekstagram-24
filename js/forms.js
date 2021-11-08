import {setBodyModalOpen} from './full-size-image.js';
import {hasDuplicates} from './util.js';
import {scaleImage} from './image-effects.js';
import {removeBodyModalOpen} from './full-size-image.js';

const errorMessages = {
  errorMaxAmountHashtags: 'Нельзя указать больше пяти хэш-тегов',
  errorRepetitiveHashtah: 'Имеются повторяющиеся хэштеги',
  errorFirstSymbol:       'Хэштег должен начинаться с #',
  errorMinSymbols:        'Хэштег не может состоять только из одной решётки',
  errorMaxLengthHashtag:  'Максимальная длина одного хэштега 20 символов',
  errorWrongSymbols:      'Хэштег может содержать только цифры, буквы и нижнее подчеркивание',
};

const activateUploadImage = () => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const imgUploadInput = document.querySelector('#upload-file');

  imgUploadInput.addEventListener('change', () => {
    setBodyModalOpen();
    imgUploadOverlay.classList.remove('hidden');
    imgUploadInput.value = '';
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
  const textHashtagsInput = document.querySelector('.text__hashtags');

  textHashtagsInput.addEventListener('input', () => {
    let arrayHashtagsValues = [];
    // приводим к нижнему регистру
    arrayHashtagsValues = textHashtagsInput.value.toLowerCase().split(' ');

    // отфильтровываем, чтобы не попадали пустые значения '' в случае нажатия на пробел
    arrayHashtagsValues = arrayHashtagsValues.filter(Boolean);

    validateHashtagsArray(arrayHashtagsValues);
  });
};

const closeForm = () => {
  const imgUploadCancel = document.querySelector('.img-upload__cancel'); // кнопка крестик для закрытия
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');

  const close = () => {
    imgUploadOverlay.classList.add('hidden');
    removeBodyModalOpen();
  };

  // Закрываем по крестику или кнопке ESC фулл фото
  imgUploadCancel.addEventListener('click', () => {
    close();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) { // 27 = ESC
      if ((document.activeElement.name === 'hashtags') || (document.activeElement.name === 'description')) {
        evt.stopPropagation();
      } else {
        close();
      }
    }
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

    validateComment(textComment);
  });
};

collectUserHashtagInput();
validateCommentInput();
scaleImage();
closeForm();

export {activateUploadImage};
