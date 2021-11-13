// Разбиваем по точке комментарии и создаем массив
const COMMENTS_MESSAGES = 'Всё отлично! В целом всё неплохо; Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'.split('.');
const COMMENTS_NAMES = ['Антон', 'Борис', 'Сергей', 'Алёна', 'Наташа', 'Соня'];
const SIMILAR_COMMENT_COUNT = 25;
const MAX_DISPLAYED_COMMENTS = 5;
const ESC_KEYBUTTON = 27;
const MAX_STRING_LENGTH = 140;

const ERROR_MESSAGES = {
  errorMaxAmountHashtags: 'Нельзя указать больше пяти хэш-тегов',
  errorRepetitiveHashtah: 'Имеются повторяющиеся хэштеги',
  errorFirstSymbol:       'Хэштег должен начинаться с #',
  errorMinSymbols:        'Хэштег не может состоять только из одной решётки',
  errorMaxLengthHashtag:  'Максимальная длина одного хэштега 20 символов',
  errorWrongSymbols:      'Хэштег может содержать только цифры, буквы и нижнее подчеркивание',
};

export {
  COMMENTS_MESSAGES, COMMENTS_NAMES, SIMILAR_COMMENT_COUNT,
  ERROR_MESSAGES, MAX_DISPLAYED_COMMENTS, ESC_KEYBUTTON,
  MAX_STRING_LENGTH
};
