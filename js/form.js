import {setBodyModalOpen} from './full-size-image.js';
import {removeBodyModalOpen} from './full-size-image.js';
import {hasDuplicates} from './util.js';
import {setupImageScale} from './image-effects.js';
import {imageEffects} from './image-effects.js';
import {ERROR_MESSAGES, MAX_STRING_LENGTH,
  MAX_AVALIABLE_HASHTAGS, ESC_KEYBUTTON} from './consts.js';

const validateStringToUnacceptableSymbols = (stringToCheck) => {
  // У нас существует другая проверка на первый символ === #, так что отсечем его.
  // Иначе он будет подпадать под шаблон регекспа и придется писать доп. код
  stringToCheck = stringToCheck.slice(1);
  if (stringToCheck.length > 0) {
    const regexp = /[^а-я\w]/i;
    return regexp.test(stringToCheck);
  }
};

// ???????? нужно ли доабвлять свою рамку или достаточно оранжевой встроенной?
// const paintBorderToElem = (elemName) => {
//   elemName.style = 'outline: 4px solid red';
// };

const validateHashtagsArray = (hashtagValuesArray) => {
  const submitButton = document.querySelector('#upload-submit');
  const textHashtagsInput = document.querySelector('.text__hashtags');

  submitButton.addEventListener('click', () => {
    textHashtagsInput.setCustomValidity('');

    if (hashtagValuesArray.length > MAX_AVALIABLE_HASHTAGS) {
      textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorMaxAmountHashtags);
    }
    if (hasDuplicates(hashtagValuesArray)) {
      textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorRepetitiveHashtah);
    }

    hashtagValuesArray.forEach((element) => {
      if (element[0] !== '#') {
        textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorFirstSymbol);
        // paintBorderToElem(textHashtagsInput);
      } else if (element.length < 2) {
        textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorMinSymbols);
        // paintBorderToElem(textHashtagsInput);
      }
      if (element.length > 20) {
        textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorMaxLengthHashtag);
        // paintBorderToElem(textHashtagsInput);
      }
      if (validateStringToUnacceptableSymbols(element)) {
        textHashtagsInput.setCustomValidity(ERROR_MESSAGES.errorWrongSymbols);
        // paintBorderToElem(textHashtagsInput);
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

//?????????? разобраться - при повторной отправке формы не работает
const closeSuccessBanner = () => {
  const successSection = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    successSection.classList.add('hidden');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESC_KEYBUTTON) {
      successSection.classList.add('hidden');
    }
  });
  window.addEventListener('click', (evt) => {
    if (!evt.target.closest('.success__inner') && (!evt.target.closest('.success__button'))) {
      successSection.classList.add('hidden');
    }
  });
};

//?????????? разобраться - при повторной отправке формы не работает
const closeErrorBanner = () => {
  const errorSection = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    errorSection.classList.add('hidden');
    // document.querySelector('.img-upload__overlay').classList.remove('hidden');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESC_KEYBUTTON) {
      errorSection.classList.add('hidden');
    }
  });
  window.addEventListener('click', (evt) => {
    if (!evt.target.closest('.error__inner') && (!evt.target.closest('.error__button'))) {
      errorSection.classList.add('hidden');
    }
  });
};

const showSuccessBanner = () => {
  const successTemplate = document.querySelector('#success');
  document.body.append(successTemplate.content.cloneNode(true));
  closeSuccessBanner();
};

const showErrorBanner = () => {
  const errorTemplate = document.querySelector('#error');
  document.body.append(errorTemplate.content.cloneNode(true));
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  closeErrorBanner();
};

const closeUserModal = () => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  imgUploadOverlay.classList.add('hidden');
  removeBodyModalOpen();
  document.querySelector('#upload-file').value = '';
};

const setupCloseEvents = () => {
  const imgUploadCancel = document.querySelector('.img-upload__cancel'); // кнопка крестик для закрытия
  // Закрываем по крестику или кнопке ESC форму
  imgUploadCancel.addEventListener('click', () => {
    closeUserModal();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESC_KEYBUTTON) {
      if ((document.activeElement.name === 'hashtags') || (document.activeElement.name === 'description')) {
        evt.stopPropagation();
      } else {
        closeUserModal();
      }
    }
  });
};

// работы с полем комментария
const validateCommentText = (comment) => {
  const textDescription = document.querySelector('.text__description');
  const submitButton = document.querySelector('#upload-submit');

  submitButton.addEventListener('click', () => {

    if (comment.length > MAX_STRING_LENGTH) {
      textDescription.setCustomValidity(ERROR_MESSAGES.errorMessageLenComment);
      // paintBorderToElem(textDescription);
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

// ????????? не работает масштаб
// задаем форме дефолтные значения
const setFormToDefault = () => {
  // ??????? может как-то можно еще очистить форму? через резет не работает
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  document.querySelector('.img-upload__preview img').style.transform = 'scale(1)';

  document.querySelector('.img-upload__preview').className = 'img-upload__preview';
  document.querySelector('.img-upload__preview').style = '';
  document.querySelector('.effect-level__slider').classList.add('hidden');
  document.querySelector('.scale__control').value = '';
  document.querySelector('.scale__control--value').value = `${100}%`;
  setupImageScale();
};

const activateUploadImage = () => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const imgUploadInput = document.querySelector('#upload-file');

  imgUploadInput.addEventListener('change', () => {
    setFormToDefault();
    setBodyModalOpen();
    imgUploadOverlay.classList.remove('hidden');
  });

  // setupImageScale();
  imageEffects();
  setupInputHashTag();
  setupInputComment();
  setupCloseEvents();
};

export {activateUploadImage};
export {closeUserModal};
export {showSuccessBanner};
export {showErrorBanner};
