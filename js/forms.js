import {setBodyModalOpen} from './full-size-image.js';
import {removeHiddenTag} from './full-size-image.js';
import {hideElement} from './full-size-image.js';
import {hasDuplicates} from './util.js';
import {scaleImage} from './image-effects.js';


let BOOL_SUBMIT_STATUS_HASHTAG = true;
let BOOL_SUBMIT_STATUS_COMMENT = true;

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

// работы с полем хэштег
// ??????????????????????????????????????
const checkStatusInFocus = (elenToCheckFocus) => {
  // если в фокусе поле с хэштегом, убираем закрытие по кнопке ESC
  // p.s. не работает. не понимаю, как реализовать.
  const imgUploadCancel = document.querySelector('.img-upload__cancel');
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');

  elenToCheckFocus.onfocus = () => {
    hideElement(imgUploadOverlay, imgUploadCancel, true);
    console.log('hashtag');
  };
  elenToCheckFocus.onblur = () => {
    hideElement(imgUploadOverlay, imgUploadCancel, false);
    console.log('comment');
  };
};

const validateHashtagsArray = (hashtagValuesArray) => {
  BOOL_SUBMIT_STATUS_HASHTAG = true;

  if (hashtagValuesArray.length > 5) {
    console.log('нельзя указать больше пяти хэш-тегов');
    BOOL_SUBMIT_STATUS_HASHTAG = false;
  }
  if (hasDuplicates(hashtagValuesArray)) {
    console.log('имеются повторяющиеся хэштеги');
    BOOL_SUBMIT_STATUS_HASHTAG = false;
  }

  const validateStringToUnacceptableSymbols = (stringToCheck) => {
    // У нас существует другая проверка на первый символ === #, так что отсечем его.
    // Иначе он будет подпадать под шаблон регекспа и придется писать доп. код
    stringToCheck = stringToCheck.slice(1);
    if (stringToCheck.length > 0) {
      const regexp = /[^а-я\w]/i;
      return regexp.test(stringToCheck);
    }
  };

  hashtagValuesArray.forEach((element) => {
    // console.log(element);

    if (element[0] !== '#') {
      console.log('хэштег должен начинаться с #');
      BOOL_SUBMIT_STATUS_HASHTAG = false;
    }
    else if (element.length < 2) {
      console.log('хештег не может состоять только из одной решётки');
      BOOL_SUBMIT_STATUS_HASHTAG = false;
    }
    if (element.length > 20) {
      console.log('максимальная длина одного хэш-тега 20 символов');
      BOOL_SUBMIT_STATUS_HASHTAG = false;
    }
    if (validateStringToUnacceptableSymbols(element)) {
      console.log('хэштег может содержать только цифры, буквы и нижнее подчеркивание');
      BOOL_SUBMIT_STATUS_HASHTAG = false;
    }
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
const validateCommentInput = () => {
  const textDescription = document.querySelector('.text__description');

  textDescription.addEventListener('input', () => {
    let textComment = textDescription.value;
    checkStatusInFocus(textDescription);

    // console.log(validateComment(textComment));
    validateComment(textComment);
  });
};

const validateComment = (comment) => {
  const MAX_STRING_LENGTH = 140;
  BOOL_SUBMIT_STATUS_COMMENT = true;
  if (comment.length > MAX_STRING_LENGTH) {
    console.log('длина комментария не может составлять больше 140 символов');
    BOOL_SUBMIT_STATUS_COMMENT = false;
  }
};

// работа с кнопкой отправки
// ???????????? как отменить отправку формы?????
let checkAndSumbitInfo = () => {
  let submitButton = document.querySelector('#upload-submit');

  submitButton.addEventListener('click', () => {
    let sumbitStatus = BOOL_SUBMIT_STATUS_HASHTAG && BOOL_SUBMIT_STATUS_COMMENT;
    if (sumbitStatus) {
      console.log('ready to submit');
    } else {
      console.log('No');
    }
  });
};


collectUserHashtagInput();
validateCommentInput();
checkAndSumbitInfo();
scaleImage();

export {activateUploadImage};
