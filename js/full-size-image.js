import {showFirstComments} from './comments-update.js';
import {setupShowingCommentsByClick} from './comments-update.js';
import {MAX_DISPLAYED_COMMENTS} from './consts.js';
import {ESC_KEYBUTTON} from './consts.js';

// Функция задаёт body класс modal-open чтобы не прокручивался фон
const setBodyModalOpen = () => {
  document.body.classList.add('modal-open');
};

// Функция убирает body класс modal-open
const removeBodyModalOpen = () => {
  document.body.classList.remove('modal-open');
};

const addComments = (commentsArray) => {
  // Находим контент шаблона
  const contentComment = document.querySelector('#comment').content;

  const elementComment = contentComment.querySelector('.social__comment');
  const socialComments = document.querySelector('.social__comments');

  // Удаляем все комментарии в social__comments (элементы li)
  socialComments.innerHTML = '';

  // Создаем по шаблону комментарии
  const fragmentComment = document.createDocumentFragment();

  commentsArray.comments.forEach((comment) => {
    // делаем копию шаблона
    const commentTemplate = elementComment.cloneNode(true);

    // Находим в шаблоне comment нужные элементы
    const imgComment = commentTemplate.querySelector('.social__picture');
    const textComment = commentTemplate.querySelector('.social__text');

    imgComment.src = comment.avatar;
    imgComment.alt = comment.name;
    textComment.textContent = comment.message;

    fragmentComment.appendChild(commentTemplate);
  });

  socialComments.appendChild(fragmentComment);
};

const setupFullImage = (objComment) => {
  const bigPictureSection = document.querySelector('.big-picture');
  const bigPictureImg = document.querySelector('.big-picture__img img');
  const likesCounter = document.querySelector('.likes-count');

  const commentsCount = document.querySelector('.social__comment-count');
  const socialCaption = document.querySelector('.social__caption');
  // const socialCommentCount = document.querySelector('.social__comment-count');

  const thumbnails = document.querySelectorAll('.picture__img');
  const likesElement = document.querySelectorAll('.picture__likes');
  const commentsElement = document.querySelectorAll('.picture__comments');
  const pictureCancel = document.querySelector('#picture-cancel');

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', () => {
      // Удаляем класс hidden при клике, чтобы открылась полная версия картинки
      bigPictureSection.classList.remove('hidden');

      // Добавляем ссыль из миниатюры в полную версию
      bigPictureImg.src = thumbnails[i].src;
      bigPictureImg.alt = `Фотография в полном размере ${[i]}`;

      socialCaption.textContent = thumbnails[i].alt;
      // Добавляем кол-во лайков
      likesCounter.textContent = likesElement[i].textContent;
      // Добавляем кол-во комментариев
      commentsCount.textContent = `${MAX_DISPLAYED_COMMENTS} из ${commentsElement[i].textContent} комментариев`;

      // Добавляем или убираем у тега body класс modal-open,
      // чтобы контейнер с фотографиями позади не прокручивался
      setBodyModalOpen();

      // Закрываем по крестику или кнопке ESC фулл фото
      document.addEventListener('keydown', (evt) => {
        if (evt.keyCode === ESC_KEYBUTTON) { // 27 = ESC
          bigPictureSection.classList.add('hidden');
          removeBodyModalOpen();
        }
      });

      pictureCancel.addEventListener('click', () => {
        bigPictureSection.classList.add('hidden');
        removeBodyModalOpen();
      });

      addComments(objComment[i]);

      // добавляем кнопку 'Загрузить ещё', если вдруг она пропала в comments-update
      const commentsLoaderHidden = document.querySelector('.comments-loader.hidden');
      if (commentsLoaderHidden) {
        commentsLoaderHidden.classList.remove('hidden');
      }
      // отображаем только первые 5 комментариев, остальные прячем.
      const socialCommentsArray = document.querySelectorAll('.social__comment');
      showFirstComments(socialCommentsArray);
    });
  }
  setupShowingCommentsByClick();
};

export {setupFullImage};
export {setBodyModalOpen};
export {removeBodyModalOpen};
