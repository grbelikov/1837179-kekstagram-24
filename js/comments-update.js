import {MAX_DISPLAYED_COMMENTS} from './consts.js';

const showFirstComments = (socialCommentsAll) => {
  // отображаем только первые maxAmountComments комментариев, остальные прячем.
  for (let i = MAX_DISPLAYED_COMMENTS; i < socialCommentsAll.length; i++) {
    socialCommentsAll[i].classList.add('hidden');
  }
};

const countComments = (strCommentsAmount) => {
  let currentAmount = strCommentsAmount.split(' ')[0];
  let totalAmount = strCommentsAmount.split(' ')[2];
  console.log(currentAmount);
  console.log(totalAmount);
  document.querySelector('.social__comment-count').textContent = currentAmount + ' fdfdf ' + totalAmount;
};

// убираем тег hidden у следующих комментариев
const removeHiddenTagToComments = (hideSocialCommentsAll) => {
  const commentsLoaderButton = document.querySelector('.comments-loader');
  const socialCommentCount = document.querySelector('.social__comment-count');
  const lengthHideComment = hideSocialCommentsAll.length;
  const maxAddComments = (MAX_DISPLAYED_COMMENTS >= lengthHideComment) ? lengthHideComment: MAX_DISPLAYED_COMMENTS;

  if (lengthHideComment === maxAddComments) {
    commentsLoaderButton.classList.add('hidden');
  }
  for (let i = 0; i < maxAddComments; i++) {
    hideSocialCommentsAll[i].classList.remove('hidden');
  }
  console.log(socialCommentCount.textContent);
  countComments(socialCommentCount.textContent);
};

// показывать больше комментариев при нажатии на кнопку Загрузить еще
const showMoreComments = () => {
  // кнопка Загрузить еще
  const commentsLoaderButton = document.querySelector('.comments-loader');
  // ищем все скрытые комментарии

  commentsLoaderButton.addEventListener('click', () => {
    const socialCommentsArray = document.querySelectorAll('.social__comment.hidden');
    console.log('click');

    removeHiddenTagToComments(socialCommentsArray);
  });
};

export {showMoreComments};
export {showFirstComments};
