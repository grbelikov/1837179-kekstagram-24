import {setBodyModalOpen} from './full-size-image.js';
import {hasDuplicates} from './util.js';
import {setupImageScale} from './image-effects.js';
import {removeBodyModalOpen} from './full-size-image.js';
import {ERROR_MESSAGES, MAX_STRING_LENGTH} from './consts.js';

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
  const textHashtagsInput = document.querySelector('.text__hashtags');

  submitButton.addEventListener('click', () => {
    textHashtagsInput.setCustomValidity('');

    if (hashtagValuesArray.length > 5) {
      textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorMaxAmountHashtags);
    }
    if (hasDuplicates(hashtagValuesArray)) {
      textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorRepetitiveHashtah);
    }

    hashtagValuesArray.forEach((element) => {
      if (element[0] !== '#') {
        textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorFirstSymbol);
      } else if (element.length < 2) {
        textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorMinSymbols);
      }
      if (element.length > 20) {
        textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorMaxLengthHashtag);
      }
      if (validateStringToUnacceptableSymbols(element)) {
        textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorWrongSymbols);
      }
    // ?????? почему-то не работает на ходу
    // submitButton.reportValidity();
    });
  });
};

const setupInputHashTag = () => {
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

const setupCloseEvents = () => {
  const imgUploadCancel = document.querySelector('.img-upload__cancel'); // кнопка крестик для закрытия
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');

  const close = () => {
    imgUploadOverlay.classList.add('hidden');
    removeBodyModalOpen();
    document.querySelector('#upload-file').value = '';
  };

  // Закрываем по крестику или кнопке ESC форму
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
const validateCommentText = (comment) => {
  const textDescription = document.querySelector('.text__description');
  const errorMessageLengthComment = 'Длина комментария не может составлять больше 140 символов';
  const submitButton = document.querySelector('#upload-submit');

  submitButton.addEventListener('click', () => {

    if (comment.length > MAX_STRING_LENGTH) {
      textDescription.setCustomValidity(errorMessageLengthComment);
    }
    // ?????? почему-то не работает на ходу
    // submitButton.reportValidity();
  });
};

const setupInputComment = () => {
  const textDescription = document.querySelector('.text__description');

  textDescription.addEventListener('input', () => {
    const textComment = textDescription.value;

    validateCommentText(textComment);
  });
};

const activateUploadImage = () => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const imgUploadInput = document.querySelector('#upload-file');

  imgUploadInput.addEventListener('change', () => {
    setBodyModalOpen();
    imgUploadOverlay.classList.remove('hidden');
  });

  setupInputHashTag();
  setupInputComment();
  setupImageScale();
  setupCloseEvents();
};

export {activateUploadImage};
