import {setBodyModalOpen} from './full-size-image.js';
import {removeBodyModalOpen} from './full-size-image.js';
import {chooseUserPhoto} from './user-image.js';
import {setImageScale} from './image-effects.js';
import {imageEffects} from './image-effects.js';
import {setInputComment} from './fields-validation.js';
import {setInputHashTag} from './fields-validation.js';
import {ESC_KEYBUTTON} from './consts.js';

const setSuccessBanner = () => {
  const successSection = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    successSection.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESC_KEYBUTTON) {
      successSection.remove();
    }
  });
  window.addEventListener('click', (evt) => {
    if (!evt.target.closest('.success__inner') && (!evt.target.closest('.success__button'))) {
      successSection.remove();
    }
  });
};

const setErrorBanner = () => {
  const errorSection = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    errorSection.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESC_KEYBUTTON) {
      errorSection.remove();
    }
  });
  window.addEventListener('click', (evt) => {
    if (!evt.target.closest('.error__inner') && (!evt.target.closest('.error__button'))) {
      errorSection.remove();
    }
  });
};

const addSuccessSection = () => {
  const successTemplate = document.querySelector('#success');
  document.body.append(successTemplate.content.cloneNode(true));
  setSuccessBanner();
};

const showErrorBanner = () => {
  const errorTemplate = document.querySelector('#error');
  document.body.append(errorTemplate.content.cloneNode(true));
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  setErrorBanner();
};

const closeUserModal = () => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  imgUploadOverlay.classList.add('hidden');
  removeBodyModalOpen();
  document.querySelector('#upload-file').value = '';
};

const setCloseEvents = () => {
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

// задаем форме дефолтные значения
const setFormToDefault = () => {
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  document.querySelector('.img-upload__preview img').style.transform = 'scale(1)';
  document.querySelector('.img-upload__preview').className = 'img-upload__preview';
  document.querySelector('.img-upload__preview').style = '';
  document.querySelector('.effect-level__slider').classList.add('hidden');
  document.querySelector('.scale__control').value = '';
  document.querySelector('.text__hashtags').setCustomValidity('');
  document.querySelector('.text__description').setCustomValidity('');
  document.querySelector('.scale__control--value').value = `${100}%`;
  setImageScale();
};

const activateUploadImage = () => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const imgUploadInput = document.querySelector('#upload-file');

  imgUploadInput.addEventListener('change', () => {
    chooseUserPhoto();
    setFormToDefault();
    setBodyModalOpen();
    setInputHashTag();
    setInputComment();
    imgUploadOverlay.classList.remove('hidden');
    document.querySelector('.text__hashtags').style.outline = '';
  });
  imageEffects();
  setCloseEvents();
};

export {activateUploadImage};
export {closeUserModal};
export {addSuccessSection};
export {showErrorBanner};
