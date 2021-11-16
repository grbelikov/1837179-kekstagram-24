const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');

const setupImgFilters = () => {
  const imgFilters = document.querySelector('.img-filters');
  imgFilters.classList.remove('img-filters--inactive');
};

const setRandomRankByClick = (cb) => {
  buttonFilterRandom.addEventListener('click', () => {
    cb();
  });
};

const setDefaultRankByClick = (cb) => {
  buttonFilterDefault.addEventListener('click', () => {
    cb();
  });
};

const setDiscussedRankByClick = (cb) => {
  buttonFilterDiscussed.addEventListener('click', () => {
    cb();
  });
};

export {setupImgFilters};
export {setDefaultRankByClick};
export {setRandomRankByClick};
export {setDiscussedRankByClick};
