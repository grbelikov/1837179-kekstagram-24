import {setBodyModalOpen} from './full-size-image.js';
// import {addHiddenTag} from './full-size-image.js';
import {removeHiddenTag} from './full-size-image.js';
import {closeFullImage} from './full-size-image.js';

//?????????????? как сбрасывать значение поля выбора файла #upload-file?
const activateUploadImage = () => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const imgUploadInput = document.querySelector('#upload-file');
  const textHashtags = document.querySelector('.text__hashtags');

  imgUploadInput.addEventListener('change', (evt) => {
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
    closeFullImage(imgUploadOverlay, imgUploadCancel, true);
    console.log('hashtag');
  };
  elenToCheckFocus.onblur = () => {
    closeFullImage(imgUploadOverlay, imgUploadCancel, false);
    console.log('comment');
  };
};


const validateHashtagsArray = (hashtagValuesArray) => {
  let _bool = true;
  if (hashtagValuesArray.length > 5) {
    console.log('нельзя указать больше пяти хэш-тегов');
    return false;
  }
// ?????????????доделать
  hashtagValuesArray.forEach((element) => {
    // console.log(element);
    if (element[0] !== '#') {
      console.log('хэш-тег должен начинаться с #');
      _bool = false;
    }
    if (element.length < 2) {
      console.log('хеш-тег не может состоять только из одной решётки');
      _bool = false;
    }
    if (element.length > 20) {
      console.log('максимальная длина одного хэш-тега 20 символов');
      _bool = false;
    }
    // else if ((element.length > 1) && (element[1] === '@')) {
    //   console.log('хэштег не может содержать пробелы, символы (#, @, $ и т. п.)');
    // }
  });
  return _bool;
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
    // console.log(validateHashtagsArray(arrayHashtagsValues));
    // console.log(arrayHashtagsValues);
  });
};


// работы с полем комментария
const validateCommentInput = () => {
  const textDescription = document.querySelector('.text__description');

  textDescription.addEventListener('input', () => {
    let textComment = textDescription.value;
    validateComment(textComment);
    // console.log(validateComment(textComment));
    checkStatusInFocus(textDescription);
  });
};

const validateComment = (comment) => {
  const MAX_STRING_LENGTH = 140;
  if (comment.length > MAX_STRING_LENGTH) {
    console.log('длина комментария не может составлять больше 140 символов');
    return false;
  }
  return true;
};

collectUserHashtagInput();
validateCommentInput();

export {activateUploadImage};
