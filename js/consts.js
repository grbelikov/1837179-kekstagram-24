const MAX_DISPLAYED_COMMENTS = 5;
const MAX_AVALIABLE_HASHTAGS = 5;
const AMOUNT_RANDOM_PHOTOS = 10;
const ESC_KEYBUTTON = 27;  // 27 = ESC
const MAX_STRING_LENGTH = 140;
const ALERT_SHOW_TIME = 10000;
const RERENDER_DELAY = 500;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const URL_GET_DATA = 'https://24.javascript.pages.academy/kekstagram/data/';
const URL_POST_DATA = 'https://24.javascript.pages.academy/kekstagram/';

const ERROR_MESSAGES = {
  errorMaxAmountHashtags:  'Нельзя указать больше пяти хэш-тегов',
  errorRepetitiveHashtah:  'Имеются повторяющиеся хэштеги',
  errorFirstSymbol:        'Хэштег должен начинаться с #',
  errorMinSymbols:         'Хэштег не может состоять только из одной решётки',
  errorMaxLengthHashtag:   'Максимальная длина одного хэштега 20 символов',
  errorWrongSymbols:       'Хэштег может содержать только цифры, буквы и нижнее подчеркивание',
  errorMessageLenComment:  'Длина комментария не может составлять больше 140 символов',
  errorNoDataReceived:     'Не удалось получить данные с сервера',
  errorFailedToSubmitForm: 'Не удалось отправить форму',
};

export {
  ERROR_MESSAGES, MAX_DISPLAYED_COMMENTS, ESC_KEYBUTTON, MAX_AVALIABLE_HASHTAGS,
  MAX_STRING_LENGTH, ALERT_SHOW_TIME, URL_GET_DATA, URL_POST_DATA, FILE_TYPES,
  AMOUNT_RANDOM_PHOTOS, RERENDER_DELAY
};
