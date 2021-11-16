import {setupFullImage} from './full-size-image.js';
import {AMOUNT_RANDOM_COMMENTS} from './consts.js';

const addContentToTemplate1 = (commentsArray) => {
  const fragment = document.createDocumentFragment();
  // Контейнер для комментариев
  const blockPastPictures = document.querySelector('.pictures');
  // Находим контент шаблона
  const contentPicture = document.querySelector('#picture').content;
  const elementPicture = contentPicture.querySelector('.picture');
  const elementPictureImg = contentPicture.querySelector('.picture__img');

  const addContent = (comment) => {
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
  };

  // Пишем переданные значения
  commentsArray.forEach((comment) => {
    addContent(comment);
  });

  const elementPictureImga = document.querySelectorAll('.picture');
  elementPictureImga.forEach( eee => eee.remove() );

  blockPastPictures.appendChild(fragment);
  setupFullImage(commentsArray);
};


const addContentToTemplate2 = (commentsArray) => {
  const fragment = document.createDocumentFragment();
  // Контейнер для комментариев
  const blockPastPictures = document.querySelector('.pictures');
  // Находим контент шаблона
  const contentPicture = document.querySelector('#picture').content;
  const elementPicture = contentPicture.querySelector('.picture');

  const addContent = (comment) => {
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
  };

  // Пишем переданные значения
  commentsArray
    .slice()
    .sort((elemA, elemB) => elemB.comments.length - elemA.comments.length)
    .forEach((comment) => {
      addContent(comment);
    });

  const elementPictureImga = document.querySelectorAll('.picture');
  elementPictureImga.forEach( eee => eee.remove() );

  blockPastPictures.appendChild(fragment);
  setupFullImage(commentsArray);
};


const addContentToTemplate3 = (commentsArray) => {
  const fragment = document.createDocumentFragment();
  // Контейнер для комментариев
  const blockPastPictures = document.querySelector('.pictures');
  // Находим контент шаблона
  const contentPicture = document.querySelector('#picture').content;
  const elementPicture = contentPicture.querySelector('.picture');

  const addContent = (comment) => {
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
  };

  // Пишем переданные значения
  commentsArray
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, AMOUNT_RANDOM_COMMENTS)
    .forEach((comment) => {
      addContent(comment);
    });

  const elementPictureImga = document.querySelectorAll('.picture');
  elementPictureImga.forEach( eee => eee.remove() );

  blockPastPictures.appendChild(fragment);
  setupFullImage(commentsArray);
};


export {addContentToTemplate1};
export {addContentToTemplate2};
export {addContentToTemplate3};
