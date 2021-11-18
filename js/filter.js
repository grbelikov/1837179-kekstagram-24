const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');

const setImgFilters = () => {
  const imgFilters = document.querySelector('.img-filters');
  imgFilters.classList.remove('img-filters--inactive');
};

const setInactiveFilter = () => {
  buttonFilterDefault.classList.remove('img-filters__button--active');
  buttonFilterDiscussed.classList.remove('img-filters__button--active');
  buttonFilterRandom.classList.remove('img-filters__button--active');
};

const setRandomRankByClick = (cb) => {
  buttonFilterRandom.addEventListener('click', () => {
    cb();
    setInactiveFilter();
    buttonFilterRandom.classList.add('img-filters__button--active');
  });
};

const setDefaultRankByClick = (cb) => {
  buttonFilterDefault.addEventListener('click', () => {
    cb();
    setInactiveFilter();
    buttonFilterDefault.classList.add('img-filters__button--active');
  });
};

const setDiscussedRankByClick = (cb) => {
  buttonFilterDiscussed.addEventListener('click', () => {
    cb();
    setInactiveFilter();
    buttonFilterDiscussed.classList.add('img-filters__button--active');
  });
};

export {setImgFilters};
export {setDefaultRankByClick};
export {setRandomRankByClick};
export {setDiscussedRankByClick};
