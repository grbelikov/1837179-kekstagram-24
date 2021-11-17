import {MAX_DISPLAYED_COMMENTS} from './consts.js';

const showFirstComments = (socialCommentsAll) => {
  // отображаем только первые MAX_DISPLAYED_COMMENTS комментариев, остальные прячем
  for (let i = MAX_DISPLAYED_COMMENTS; i < socialCommentsAll.length; i++) {
    socialCommentsAll[i].classList.add('hidden');
  }
};

const setupCommentsLoaderButton = () => {
  // убираем тег hidden у следующих комментариев
  const socialCommentCount = document.querySelector('.social__comment-count');
  const socialHiddenCommentsArray = document.querySelectorAll('.social__comment.hidden');
  const socialCommentsArray = document.querySelectorAll('.social__comment:not(.hidden)');
  const lengthHideComment = socialHiddenCommentsArray.length;
  const maxAddComments = (MAX_DISPLAYED_COMMENTS >= lengthHideComment) ? lengthHideComment: MAX_DISPLAYED_COMMENTS;
  const commentsLoaderButton = document.querySelector('.comments-loader');

  if (lengthHideComment === maxAddComments) {
    commentsLoaderButton.classList.add('hidden');
  }
  for (let i = 0; i < maxAddComments; i++) {
    socialHiddenCommentsArray[i].classList.remove('hidden');
  }
  socialCommentCount.textContent =  `${socialCommentsArray.length + maxAddComments} из ${lengthHideComment + socialCommentsArray.length} комментариев`;
};

// показывать больше комментариев при нажатии на кнопку 'Загрузить еще'
const setupShowingCommentsByClick = () => {
  // ищем все скрытые комментарии
  document.querySelector('.comments-loader').addEventListener('click', setupCommentsLoaderButton);
};

export {setupShowingCommentsByClick};
export {showFirstComments};
export {setupCommentsLoaderButton};
