// Функция делает класс невидимым
function addHiddenTag(className) {
  className.classList.add('hidden');
}

function closeFullImage() {
  const bigPictureSection = document.querySelector('.big-picture');
  // Кнопка закрытия большой картинки
  const contentPicture = document.querySelector('#picture-cancel');

  // !!!!!!!!!! В функциях ниже повторяющийся код. Как обьединить?
  // Закрываем по крестику или кнопке ESC фулл фото
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) { // 27 === ESC
      addHiddenTag(bigPictureSection);
      document.body.classList.remove('modal-open');
    }
  });

  contentPicture.addEventListener('click', () => {
    addHiddenTag(bigPictureSection);
    document.body.classList.remove('modal-open');
  });
}

function addComments(commentsArray) {
  // Находим контент шаблона
  const contentComment = document.querySelector('#comment').content;

  const elementComment = contentComment.querySelector('.social__comment');
  const socialComments = document.querySelector('.social__comments');

  // Удаляем все комментарии в social__comments (элементы li)
  socialComments.innerHTML = '';

  // Создаем по шаблону комментарии
  const fragmentComment = document.createDocumentFragment();

  for (let k=0; k<commentsArray.comments.length; k++) {
    // делаем копию шаблона
    const commentTemplate = elementComment.cloneNode(true);

    // Находим в шаблоне comment нужные элементы
    const imgComment = commentTemplate.querySelector('.social__picture');
    const textComment = commentTemplate.querySelector('.social__text');

    imgComment.src = commentsArray.comments[k].avatar;
    imgComment.alt = commentsArray.comments[k].name;
    textComment.textContent = commentsArray.comments[k].message;

    fragmentComment.appendChild(commentTemplate);
  }
  socialComments.appendChild(fragmentComment);
}

function openFullImage(objComment) {
  const bigPictureSection = document.querySelector('.big-picture');
  const bigPictureImg = document.querySelector('.big-picture__img img');
  const likesCounter = document.querySelector('.likes-count');

  const commentsCount = document.querySelector('.comments-count');
  const socialCaption = document.querySelector('.social__caption');
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const bodyElement = document.body;

  const thumbnails = document.querySelectorAll('.picture__img');
  const likes = document.querySelectorAll('.picture__likes');
  const comments = document.querySelectorAll('.picture__comments');

  //!!!!!! Почему это работает? почему цикл не возвращает последнюю i массива каждый раз?
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].onclick = function() {
      // Удаляем класс hidden при клике, чтобы открылась полная версия картинки
      bigPictureSection.classList.remove('hidden');

      // Добавляем ссыль из миниатюры в полную версию
      bigPictureImg.src = thumbnails[i].src;
      bigPictureImg.alt = `Фотография в полном размере ${[i]}`;

      //!!!!!!! Добавляем описание в альт(или куда?? в задании ошибка -
      // поля дескрипшн нет в задании!) из миниатюры в полную версию
      socialCaption.textContent = thumbnails[i].alt;
      // Добавляем кол-во лайков
      likesCounter.textContent = likes[i].textContent;
      // Добавляем кол-во комментариев
      commentsCount.textContent = comments[i].textContent;

      // прячем классы social__comment-count и comments-loader, добавляя им
      // класс hidden. С ними мы разберёмся позже, в другом домашнем задании
      addHiddenTag(socialCommentCount);
      addHiddenTag(commentsLoader);

      // Добавляем или убираем у тега body класс modal-open,
      // чтобы контейнер с фотографиями позади не прокручивался
      bodyElement.classList.add('modal-open');

      closeFullImage(bodyElement);
      addComments(objComment[i]);
    };
  }
}

export {openFullImage};
