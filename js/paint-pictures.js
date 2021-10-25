function createTemplate(objectComment) {
  // Контейнер для комментариев
  const blockPastPictures = document.querySelector('.pictures');

  // Находим контент шаблона
  const contentPicture = document.querySelector('#picture').content;
  const elementPicture = contentPicture.querySelector('.picture');

  // делаем копию шаблона
  const infoPicturesTemplate = elementPicture.cloneNode(true);

  // Находим в шаблоне picture нужные элементы
  const imgPicture = infoPicturesTemplate.querySelector('.picture__img');
  const commentsPicture = infoPicturesTemplate.querySelector('.picture__comments');
  const likesPicture = infoPicturesTemplate.querySelector('.picture__likes');

  // И пишем переданные значения
  imgPicture.src = objectComment.url;
  commentsPicture.textContent = objectComment.likes;
  likesPicture.textContent = objectComment.comments.length;

  blockPastPictures.append(infoPicturesTemplate);
}

export {createTemplate};
