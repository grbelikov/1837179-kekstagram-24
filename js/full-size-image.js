// Функция добавляет класс hidden к классу
//!!!!!!!!! Почему мы можем обьявить функцию тут, а можем в конце
//!!!!!!!!! после экспорта и она все равно будет работать???
function addHiddenTag(className) {
  className.classList.add('hidden');
}

function openFullImage () {
  const bigPictureSection = document.querySelector('.big-picture');
  const bigPictureImg = document.querySelector('.big-picture__img img');
  const likesCounter = document.querySelector('.likes-count');

  const commentsCount = document.querySelector('.comments-count');
  const socialComments = document.querySelector('.social__comments');
  const socialCaption = document.querySelector('.social__caption');
  const socialCommentCounter = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const bodyElement = document.querySelector('body');

  // Кнопка закрытия большой картинки
  const contentPicture = document.querySelector('#picture-cancel');

  // const picturesArray = document.querySelectorAll('.picture');

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
      //!!!!!!! Добавляем описание в альт(или куда?? в задании ошибка -
      // поля дескрипшн нет в задании!) из миниатюры в полную версию
      socialCaption.textContent = thumbnails[i].alt;

      // Добавляем кол-во лайков
      likesCounter.textContent = likes[i].textContent;

      // Добавляем кол-во комментариев
      commentsCount.textContent = comments[i].textContent;

      // прячем классы, добавляя им класс hidden
      // с ними мы разберёмся позже, в другом домашнем задании
      // commentsLoader(socialCommentCounter);
      // addHiddenTag(commentsLoader);

      // Добавляем или убираем тегу body класс modal-open,
      // чтобы контейнер с фотографиями позади не прокручивался
      // bodyElement.classList.add('modal-open');
      // bodyElement.classList.remove('modal-open');

      document.addEventListener('keydown', function(evt) {
        // Проверяем, что код клавиши равен 27 (ESC)
        if (evt.keyCode === 27) {
          console.log('ESC');
          addHiddenTag(bigPictureSection);
        }
      });

      contentPicture.onclick = function() {
        console.log('Вы нажали на кнопку');
        addHiddenTag(bigPictureSection);
      };

      console.log(commentsCount.textContent);
    };
  }

  // console.log('aqqaqaqaq');
  // console.log(picturesArray[0]);

}

export {openFullImage};
