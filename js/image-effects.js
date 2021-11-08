
// эффекты

// Масштаб изображения
const scaleImage = () => {
  const scaleControlValue = document.querySelector('.scale__control--value');
  const scaleControlSmaller = document.querySelector('.scale__control--smaller');
  const scaleControlBigger = document.querySelector('.scale__control--bigger');
  const imgUploadPreview = document.querySelector('.img-upload__preview');
  let intScaleControlValue = +(scaleControlValue.value.slice(0, -1));

  scaleControlSmaller.addEventListener('click', () => {
    if (intScaleControlValue >= 25) {
      intScaleControlValue -= 25;
    }
    if (intScaleControlValue < 25) {
      intScaleControlValue = 25;
    }
    scaleControlValue.value = intScaleControlValue;
    imgUploadPreview.style.transform = `scale(${intScaleControlValue/100})`;
  });

  scaleControlBigger.addEventListener('click', () => {
    if (intScaleControlValue <= 75) {
      intScaleControlValue += 25;
    }
    if (intScaleControlValue > 75) {
      intScaleControlValue = 100;
    }
    scaleControlValue.value = intScaleControlValue;
    imgUploadPreview.style.transform = `scale(${scaleControlValue.value/100})`;
  });
};

// Слайдер
const setSlider = (effectName) => {
  // const effectLevelValue = document.querySelector('.effect-level__value');
  const imgUploadPreview = document.querySelector('.img-upload__preview');

  // Заглушка
  const sliderValue = 1;
  // console.log(effectName);
  const sliderEffectsDictionary = {
    chrome: {
      'name': 'grayscale',
      'units': '',
    },
    sepia:  {
      'name': 'sepia',
      'units': '',
    },
    marvin: {
      'name': 'invert',
      'units': '%',
    },
    phobos: {
      'name': 'blur',
      'units': 'px',
    },
    heat:   {
      'name': 'brightness',
      'units': '',
    },
  };

  if (effectName === 'none') {
    imgUploadPreview.style.filter = '';
  } else {
    imgUploadPreview.style.filter = `${sliderEffectsDictionary[effectName].name}(${sliderValue}${sliderEffectsDictionary[effectName].units})`;
  }
};

// Эффекты на изображение
const effectsToImage = () => {
  const effectsRadio = document.querySelectorAll('.effects__radio');
  const imgUploadPreview = document.querySelector('.img-upload__preview');

  effectsRadio.forEach((effect) => {
    effect.addEventListener('click', () => {

      let cssNameEffect = 'effects__preview--';

      imgUploadPreview.className = 'img-upload__preview';

      let cssName = effect.id.split('-');
      cssName = cssName[cssName.length-1];

      if (cssName !== 'none') {
        // console.log(cssName);
        cssNameEffect = cssNameEffect + cssName;
        imgUploadPreview.classList.add(cssNameEffect);
      }
      setSlider(cssName);
    });
  });
};


effectsToImage();

export {scaleImage};


// Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
// Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
// Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
// Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
// Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
// Для эффекта «Оригинал» CSS-стили filter удаляются.
