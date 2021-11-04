import {setupFullImage} from './full-size-image.js';

const createTemplate = (objectComment) => {
  const fragment = document.createDocumentFragment();

  // Контейнер для комментариев
  const blockPastPictures = document.querySelector('.pictures');

  // Находим контент шаблона
  const contentPicture = document.querySelector('#picture').content;
  const elementPicture = contentPicture.querySelector('.picture');

  // Пишем переданные значения
  objectComment.forEach((comment) => {
    // делаем копию шаблона
    const infoPicturesTemplate = elementPicture.cloneNode(true);

    // Находим в шаблоне picture нужные элементы
    const imgPicture = infoPicturesTemplate.querySelector('.picture__img');
    const commentsPicture = infoPicturesTemplate.querySelector('.picture__comments');
    const likesPicture = infoPicturesTemplate.querySelector('.picture__likes');

    imgPicture.src = comment.url;
    imgPicture.alt = comment.description;
    commentsPicture.textContent = comment.comments.length;
    likesPicture.textContent = comment.likes;

    fragment.appendChild(infoPicturesTemplate);
  });

  blockPastPictures.appendChild(fragment);
  setupFullImage(objectComment);
};

export {createTemplate};
