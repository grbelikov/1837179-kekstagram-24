// Функция задаёт body класс modal-open чтобы не прокручивался фон
const setBodyModalOpen = () => {
  document.body.classList.add('modal-open');
};

// Функция убирает body класс modal-open
const removeBodyModalOpen = () => {
  document.body.classList.remove('modal-open');
};

const hideElement = (elementToClose, onClickObject, _inFocus=false) => {
  // Закрываем по крестику или кнопке ESC фулл фото
  document.addEventListener('keydown', (evt) => {
    if ((evt.keyCode === 27) && (!_inFocus)) { // 27 = ESC
      elementToClose.classList.add('hidden');

      removeBodyModalOpen();
    }
  });

  onClickObject.addEventListener('click', () => {
    elementToClose.classList.add('hidden');

    removeBodyModalOpen();
  });
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

  const commentsCount = document.querySelector('.comments-count');
  const socialCaption = document.querySelector('.social__caption');
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  const thumbnails = document.querySelectorAll('.picture__img');
  const likesElement = document.querySelectorAll('.picture__likes');
  const commentsElement = document.querySelectorAll('.picture__comments');

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
      commentsCount.textContent = commentsElement[i].textContent;

      // прячем классы social__comment-count и comments-loader, добавляя им
      // класс hidden. С ними мы разберёмся позже, в другом домашнем задании
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');

      // Добавляем или убираем у тега body класс modal-open,
      // чтобы контейнер с фотографиями позади не прокручивался
      setBodyModalOpen();

      hideElement(
        document.querySelector('.big-picture'),
        document.querySelector('#picture-cancel'),
      );
      addComments(objComment[i]);
    });
  }
};

export {setupFullImage};
export {setBodyModalOpen};
export {removeBodyModalOpen};
export {hideElement};
