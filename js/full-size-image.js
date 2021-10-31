function openFullImage () {
  const bigPictureSection = document.querySelector('.big-picture');
  const bigPictureImg = document.querySelector('.big-picture__img');
  const likesCounter = document.querySelector('.likes-count');
  const socialComments = document.querySelector('.social__comments');
  const socialCaption = document.querySelector('.social__caption');
  const socialCommentCounter = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  const thumbnails = document.querySelectorAll('.picture__img');
  // const thumbnails = document.querySelectorAll('.effects__item');

  bigPictureImg.src = 'example_src';

  bigPictureSection.remove('hidden');


  console.log(thumbnails);
  console.log('aqqaqaqaq');

  // console.log(bigPicture.classList.contains('hidden'));

  // fullSizeImageElement.src = 'comment.url';
}
openFullImage();
export {openFullImage};
