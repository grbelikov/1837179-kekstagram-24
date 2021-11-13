const createLoader = () => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      console.log('Результат', data[0]);
    });
};


export {createLoader};
