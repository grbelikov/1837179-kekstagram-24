import {setBodyModalOpen} from './full-size-image.js';
// import {addHiddenTag} from './full-size-image.js';
import {removeHiddenTag} from './full-size-image.js';
import {closeFullImage} from './full-size-image.js';

const checkStatusInFocus = (elementToCheck) => {
  // если в фокусе поле схэштегом, убираем закрытие по кнопке ESC
  // p.s. не работает. не понимаю, как реализовать.
  textHashtags.onfocus = () => {
    closeFullImage(imgUploadOverlay, imgUploadCancel, true);
    console.log('true');
  };
  textHashtags.onblur = () => {
    closeFullImage(imgUploadOverlay, imgUploadCancel, false);
    console.log('false');
  };
};

const activateUploadImage = () => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const imgUploadInput = document.querySelector('#upload-file');
  const imgUploadCancel = document.querySelector('.img-upload__cancel');
  const textHashtags = document.querySelector('.text__hashtags');

  imgUploadInput.addEventListener('change', () => {
    setBodyModalOpen();
    removeHiddenTag(imgUploadOverlay);

    checkStatusInFocus(textHashtags);
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

const validateHashtagsArray = (hashtagValuesArray) => {
  if (hashtagValuesArray.length > 5) {
    console.log('нельзя указать больше пяти хэш-тегов');
  }

  hashtagValuesArray.forEach((element) => {
    // console.log(element);
    if (element[0] !== '#') {
      // console.log('хэш-тег должен начинаться с #');
    } else if (element.length < 2) {
      // console.log('хеш-тег не может состоять только из одной решётки');
    } else if (element.length > 20) {
      // console.log('максимальная длина одного хэш-тега 20 символов');
    }
    // else if ((element.length > 1) && (element[1] === '@')) {
    //   console.log('хэштег не может содержать пробелы, символы (#, @, $ и т. п.)');
    // }
  });
};

collectUserHashtagInput();


export {activateUploadImage};
