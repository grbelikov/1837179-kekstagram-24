import {setBodyModalOpen} from './full-size-image.js';
// import {addHiddenTag} from './full-size-image.js';
import {removeHiddenTag} from './full-size-image.js';
import {closeFullImage} from './full-size-image.js';

const checkStatusInFocus = () => {
  console.log('AAA');

  // input.onfocus = function() {
    //   if (this.classList.contains('invalid')) {
      //     // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
      //     this.classList.remove('invalid');
      //     error.innerHTML = "";
      //   }
      // };

};

const activateUploadImage = () => {
  const imgIploadOverlay = document.querySelector('.img-upload__overlay');
  const imgUploadInput = document.querySelector('.img-upload__input');
  const imgUploadCancel = document.querySelector('.img-upload__cancel');
  const textHashtags = document.querySelector('.text__hashtags');

  imgUploadInput.addEventListener('change', () => {
    setBodyModalOpen();
    removeHiddenTag(imgIploadOverlay);

    // если инпут в фокусе, убираем закрытие по кнопке ESC
    if (checkStatusInFocus()) {
      closeFullImage(imgIploadOverlay, imgUploadCancel, true);
    } else {
      closeFullImage(imgIploadOverlay, imgUploadCancel, false);
    }
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

const validateHashtagInput = () => {
  const textHashtags = document.querySelector('.text__hashtags');

  textHashtags.addEventListener('input', () => {
    // const valueLength = textHashtags.value.length;
    let arrayHashtagsValues = [];

    // и приводим к нижнему регистру
    arrayHashtagsValues = textHashtags.value.toLowerCase().split(' ');

    // отфильтровываем, чтобы не попадали пустые значения '' в случае нажатия на пробел
    arrayHashtagsValues = arrayHashtagsValues.filter(Boolean);

    validateHashtagsArray(arrayHashtagsValues);
  });
};


validateHashtagInput();


export {activateUploadImage};
