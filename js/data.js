import {COMMENTS_MESSAGES, COMMENTS_NAMES, SIMILAR_COMMENT_COUNT} from './consts.js';
import {getRandomInteger} from './util.js';

// Функция для создания конечного объекта нужной структуры
const createArrayObject = () => {
  const generatedObjectsArray = [];
  const description = 'description to test ';

  // Функция для создания комментария заданной структуры
  const createCommentObject = (idObjNumber, idCommentNumber) => ({
    id: +(idObjNumber.toString() + idCommentNumber.toString()),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: COMMENTS_MESSAGES[getRandomInteger(0, COMMENTS_MESSAGES.length-1)],
    name: COMMENTS_NAMES[getRandomInteger(0, COMMENTS_NAMES.length-1)],
  });

  // Создаем в цикле 25 объектов с заданной структурой
  for (let i=1; i <= SIMILAR_COMMENT_COUNT; i++) {
    const userObject = {
      id: i,
      url: `photos/${i}.jpg`,
      description: description.concat(i),
      likes: getRandomInteger(15, 200),
      comments: [],
    };

    // Добавляем произвольное количество комментариев в масссив comments
    for (let k=0; k<(getRandomInteger(6, 25)); k++) {
      userObject.comments.push(createCommentObject(i, k));
    }

    generatedObjectsArray.push(userObject);
  }

  return generatedObjectsArray;
};

export {createArrayObject};
