import {getRandomInteger} from './util.js';
import {createTemplate} from './paint-pictures.js';

// Разбиваем по точке комментарии и создаем массив
const COMMENTS_MESSAGES = 'Всё отлично! В целом всё неплохо; Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'.split('.');
const COMMENTS_NAMES = ['Антон', 'Борис', 'Сергей', 'Алёна', 'Наташа', 'Соня'];
const SIMILAR_COMMENT_COUNT = 25;

// Функция для создания конечного объекта нужной структуры
function createArrayObject() {
  const generatedObjectsArray = [];
  const description = 'description to test ';

  // Функция для создания комментария заданной структуры
  function createCommentObject(idObjNumber, idCommentNumber) {
    return {
      id: +(idObjNumber.toString() + idCommentNumber.toString()),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: COMMENTS_MESSAGES[getRandomInteger(0, COMMENTS_MESSAGES.length-1)],
      name: COMMENTS_NAMES[getRandomInteger(0, COMMENTS_NAMES.length-1)],
    };
  }

  // Создаем в цикле 25 объектов с заданной структурой
  for (let i=1; i<=SIMILAR_COMMENT_COUNT; i++) {
    const userObject = {
      id: i,
      url: `photos/${i}.jpg`,
      description: description.concat(i),
      likes: getRandomInteger(15, 200),
      comments: [],
    };

    // Добавляем произвольное количество комментариев в масссив comments
    for (let k=0; k<(getRandomInteger(1, 8)); k++) {
      userObject.comments.push(createCommentObject(i, k));
    }

    generatedObjectsArray.push(userObject);
  }

  return generatedObjectsArray;
}

const similarComments = createArrayObject();

for (let i=0; i<SIMILAR_COMMENT_COUNT; i++) {
  createTemplate(
    similarComments[i].url,
    similarComments[i].likes,
    similarComments[i].comments.length,
  );
}
