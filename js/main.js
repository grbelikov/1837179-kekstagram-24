let likesArray = [];
let uniqSetId = new Set();
let uniqSetUrl = new Set();
let description = 'description to test';
let comments = [];

let commentIdGlobal = 0;
let commentMessage = 'Всё отлично! В целом всё неплохо; Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';
let commentName = ['Антон', 'Борис', 'Сергей', 'Алёна', 'Наташа', 'Соня'];

let generatedObjectsArray = [];

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

// Функция для создания множества из рандомных эл-тов с minVal по maxVal (неповторяющихся)
function createSetWithRandomVal(minVal, maxVal) {
  const uniqSet = new Set();
  while (uniqSet.size < 25) {
    uniqSet.add(getRandomInteger(minVal, maxVal));
  }
  return uniqSet;
}

// Создаем множества элементов, так как значения д.б. уникальными
uniqSetId = createSetWithRandomVal(1, 25);
uniqSetUrl = createSetWithRandomVal(1, 25);

// Разбиваем по точке комментарии и добавляем в массив
commentMessage = commentMessage.split('.');

// Функция для создания одного объекта нужной структуры
function arrayObject(
  uniqSetId,
  uniqSetUrl,
  description,
  comments,
  commentMessage,
  commentName
  ) {
    uniqSetIdElement = uniqSetId.values().next().value;
    uniqSetUrlElement = uniqSetUrl.values().next().value;

    const userObject = {
      id: uniqSetIdElement,
      url: `photos/${uniqSetUrlElement}.jpg`,
      description: description,
      likes: getRandomInteger(15, 200),
      comments:
      [
        {
          id: commentIdGlobal+=1,
          avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
          message: commentMessage[getRandomInteger(0, commentMessage.length-1)],
          name: commentName[getRandomInteger(0, commentName.length-1)],
        },
        {
          id: commentIdGlobal+=1,
          avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
          message: commentMessage[getRandomInteger(0, commentMessage.length-1)],
          name: commentName[getRandomInteger(0, commentName.length-1)],
        }
      ]
    }
  // Удаляем использованные элементы из множества
  uniqSetId.delete(uniqSetIdElement);
  uniqSetUrl.delete(uniqSetUrlElement);

  return userObject;
}

// Создаем в цикле все 25 объектов
for (let i=0; i<25; i++) {
  let generatedObject = arrayObject(
    uniqSetId, uniqSetUrl, description,
    comments, commentMessage, commentName
    );
  generatedObjectsArray.push(generatedObject);
}

// alert(generatedObjectsArray.length);
// alert(generatedObjectsArray[7].url);
// alert(generatedObjectsArray[7].comments[0].avatar);
// alert(generatedObjectsArray[7].comments[1].avatar);
