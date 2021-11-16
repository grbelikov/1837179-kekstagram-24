import {setupFullImage} from './full-size-image.js';
import {AMOUNT_RANDOM_PHOTOS} from './consts.js';

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

// Функция рисует фотографии по умолчанию из массива
const addContentToTemplateDefaultOrder = (commentsArray) => {
  // Пишем переданные значения
  commentsArray.forEach((comment) => {
    addContent(comment);
  });
  // Удаляем старые элементы
  document.querySelectorAll('.picture').forEach((element) => element.remove());

  blockPastPictures.appendChild(fragment);
  setupFullImage(commentsArray);
};

// Функция сортирует фотографии по убыванию кол-ва комментариев в них
const addContentToTemplateDescendingOrder = (commentsArray) => {
  // Пишем переданные значения
  commentsArray
    .slice()
    .sort((elemA, elemB) => elemB.comments.length - elemA.comments.length)
    .forEach((comment) => {
      addContent(comment);
    });
  // Удаляем старые элементы
  document.querySelectorAll('.picture').forEach((element) => element.remove());

  blockPastPictures.appendChild(fragment);
  setupFullImage(commentsArray);
};

// Функция рисует AMOUNT_RANDOM_COMMENTS случайных фотографий
const addContentToTemplateRandomOrder = (commentsArray) => {
  // Пишем переданные значения
  commentsArray
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, AMOUNT_RANDOM_PHOTOS)
    .forEach((comment) => {
      addContent(comment);
    });
  // Удаляем старые элементы
  document.querySelectorAll('.picture').forEach((element) => element.remove());

  blockPastPictures.appendChild(fragment);
  setupFullImage(commentsArray);
};

export {addContentToTemplateDefaultOrder};
export {addContentToTemplateDescendingOrder};
export {addContentToTemplateRandomOrder};
