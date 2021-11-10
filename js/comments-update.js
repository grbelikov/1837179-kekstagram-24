import {MAX_DISPLAYED_COMMENTS} from './consts.js';

const showFirstComments = (socialCommentsAll) => {
  // отображаем только первые maxAmountComments комментариев, остальные прячем.
  for (let i = MAX_DISPLAYED_COMMENTS; i < socialCommentsAll.length; i++) {
    socialCommentsAll[i].classList.add('hidden');
  }
};

// показывать больше комментариев при нажатии на кнопку Загрузить еще
const showMoreComments = () => {
  // кнопка Загрузить еще
  const commentsLoaderButton = document.querySelector('.comments-loader');
  // ищем все скрытые комментарии

  commentsLoaderButton.addEventListener('click', () => {

    // убираем тег hidden у следующих комментариев
    const socialCommentCount = document.querySelector('.social__comment-count');
    const socialHiddenCommentsArray = document.querySelectorAll('.social__comment.hidden');
    const socialCommentsArray = document.querySelectorAll('.social__comment:not(.hidden)');
    const lengthHideComment = socialHiddenCommentsArray.length;
    const maxAddComments = (MAX_DISPLAYED_COMMENTS >= lengthHideComment) ? lengthHideComment: MAX_DISPLAYED_COMMENTS;

    if (lengthHideComment === maxAddComments) {
      commentsLoaderButton.classList.add('hidden');
    }
    for (let i = 0; i < maxAddComments; i++) {
      socialHiddenCommentsArray[i].classList.remove('hidden');
    }
    socialCommentCount.textContent =  `${socialCommentsArray.length + maxAddComments} из ${lengthHideComment + socialCommentsArray.length} комментариев`;
  });
};

export {showMoreComments};
export {showFirstComments};
