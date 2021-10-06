// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(valueFrom, valueTo) {
  if ((valueFrom < 0) || (valueFrom >= valueTo)) {
    console.log('Проверьте правильность диапазона значений.');
    return;
  }
  // Cлучайное число от min до max
  const randomValue = valueFrom + Math.random() * (valueTo + 1 - valueFrom);
  return Math.floor(randomValue);
}

// Функция для проверки максимальной длины строки
function validateMaxLengthString(enteredString, maxLenght=140) {
  return (enteredString.length <= maxLenght);
}

// Функция для создания конечного объекта нужной структуры
function createArrayObject() {
  let commentMessage = 'Всё отлично! В целом всё неплохо; Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';

  // Разбиваем по точке комментарии и создаем массив
  commentMessage = commentMessage.split('.');

  const commentName = ['Антон', 'Борис', 'Сергей', 'Алёна', 'Наташа', 'Соня'];
  const generatedObjectsArray = [];
  const description = 'description to test ';

  // Функция для создания комментария заданной структуры
  function createCommentObject(idObjNumber, idCommentNumber) {
    const CommentsObject = {
      id: +(idObjNumber.toString() + idCommentNumber.toString()),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: commentMessage[getRandomInteger(0, commentMessage.length-1)],
      name: commentName[getRandomInteger(0, commentName.length-1)],
    };
    return CommentsObject;
  }

  // Создаем в цикле 25 объектов с заданой структурой
  for (let i=1; i<26; i++) {
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
