import {FILE_TYPES} from './consts.js';

const chooseUserPhoto = () => {
  const imgUploadInput = document.querySelector('#upload-file');
  const preview = document.querySelector('.img-upload__preview img');

  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

export {chooseUserPhoto};
