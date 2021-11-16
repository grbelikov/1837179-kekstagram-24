import {AMOUNT_RANDOM_COMMENTS} from './consts.js';

const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');

const setupImgFilters = () => {
  const imgFilters = document.querySelector('.img-filters');
  imgFilters.classList.remove('img-filters--inactive');
};

const setRandomRankByClick = (cb) => {
  buttonFilterRandom.addEventListener('click', (evt) => {
    console.log('ran');
    cb();
  });
};

const setDefaultRankByClick = (cb) => {
  buttonFilterDefault.addEventListener('click', () => {
    console.log('def');
    cb();
  });
};

const setDiscussedRankByClick = (cb) => {
  buttonFilterDiscussed.addEventListener('click', (evt) => {
    console.log('dis');
    cb();
  });
};

export {setupImgFilters};
export {setDefaultRankByClick};
export {setRandomRankByClick};
export {setDiscussedRankByClick};
