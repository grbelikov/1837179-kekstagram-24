const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');



const setupImgFilters = () => {
  const imgFilters = document.querySelector('.img-filters');

  imgFilters.classList.remove('img-filters--inactive');
  console.log('ffff');
};

export {setupImgFilters};
