const MAX_DISPLAYED_COMMENTS = 5;
const MAX_AVALIABLE_HASHTAGS = 5;
const AMOUNT_RANDOM_PHOTOS = 10;
const ESC_KEYBUTTON = 27;  // 27 = ESC
const MAX_STRING_LENGTH = 140;
const MAX_LENGTH_HASHTAG = 20;
const ALERT_SHOW_TIME = 10000;
const RERENDER_DELAY = 500;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const URL_GET_DATA = 'https://24.javascript.pages.academy/kekstagram/data/';
const URL_POST_DATA = 'https://24.javascript.pages.academy/kekstagram/';

const ERROR_MESSAGES = {
  errorMaxAmountHashtags:  'Нельзя указать больше пяти хэштегов\n',
  errorRepetitiveHashtah:  'Имеются повторяющиеся хэштеги\n',
  errorFirstSymbol:        'Хэштег должен начинаться с #\n',
  errorMinSymbols:         'Хэштег не должен состоять только из одной решётки\n',
  errorMaxLengthHashtag:   'Максимальная длина одного хэштега 20 символов\n',
  errorWrongSymbols:       'Хэштег может содержать только цифры, буквы и нижнее подчеркивание\n',
  errorMessageLenComment:  'Длина комментария не может составлять больше 140 символов\n',
  errorNoDataReceived:     'Не удалось получить данные с сервера\n',
  errorFailedToSubmitForm: 'Не удалось отправить форму\n',
};

export {
  ERROR_MESSAGES, MAX_DISPLAYED_COMMENTS, ESC_KEYBUTTON, MAX_AVALIABLE_HASHTAGS,
  MAX_STRING_LENGTH, ALERT_SHOW_TIME, MAX_LENGTH_HASHTAG, URL_GET_DATA,
  URL_POST_DATA, FILE_TYPES, AMOUNT_RANDOM_PHOTOS, RERENDER_DELAY
};
