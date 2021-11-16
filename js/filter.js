const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');

const setupImgFilters = () => {
  const imgFilters = document.querySelector('.img-filters');
  imgFilters.classList.remove('img-filters--inactive');
};


// по умолчанию
// commentsArray
//   .forEach((comment) => {
//     addContent(comment);
//   });


// обсуждаемые
// commentsArray
//   .slice()
//   .sort((elemA, elemB) => elemB.comments.length - elemA.comments.length)
//   .forEach((comment) => {
//     addContent(comment);
//   });


// const setDefaultRankByClick = (cb) => {
//   buttonFilterDefault.addEventListener('click', (evt) => {
//     console.log('def');
//     // Случайные
//     commentsArray
//       .slice()
//       .sort(() => 0.5 - Math.random())
//       .slice(0, AMOUNT_RANDOM_COMMENTS)
//       .forEach((comment) => {
//         addContent(comment);
//       });
//     cb();
//   });
// };


const setDefaultRankByClick = (cb) => {
  buttonFilterDefault.addEventListener('click', (evt) => {
    console.log('def');
    // Случайные
    commentsArray
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, AMOUNT_RANDOM_COMMENTS)
      .forEach((comment) => {
        addContent(comment);
      });
    cb();
  });
};


const setRandomRankByClick = (cb) => {
  buttonFilterRandom.addEventListener('click', () => {
    console.log('ran');
    commentsArray
      .forEach((comment) => {
        addContent(comment);
      });
    cb();
  });
};


const setDiscussedRankByClick = (cb) => {
  buttonFilterDiscussed.addEventListener('click', () => {
    console.log('dis');
    commentsArray
      .slice()
      .sort((elemA, elemB) => elemB.comments.length - elemA.comments.length)
      .forEach((comment) => {
        addContent(comment);
      });
    cb();
  });
};


// Случайные
// commentsArray
//   .slice()
//   .sort(() => 0.5 - Math.random())
//   .slice(0, AMOUNT_RANDOM_COMMENTS)
//   .forEach((comment) => {
//     addContent(comment);
//   });

// по умолчанию
// commentsArray
//   .forEach((comment) => {
//     addContent(comment);
//   });


// обсуждаемые
// commentsArray
//   .slice()
//   .sort((elemA, elemB) => elemB.comments.length - elemA.comments.length)
//   .forEach((comment) => {
//     addContent(comment);
//   });

export {setupImgFilters};
export {setDefaultRankByClick};
export {setDiscussedRankByClick};
export {setRandomRankByClick};
