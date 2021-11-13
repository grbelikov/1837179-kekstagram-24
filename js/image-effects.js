// эффекты
const setupSlider = (effectName, sliderValue) => {
  const imgUploadPreview = document.querySelector('.img-upload__preview');
  const effectLevelValue = document.querySelector('.effect-level__value');

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
  effectLevelValue.value = sliderValue;
};

// Эффекты на изображение
const imageEffects = () => {
  const effectsRadio = document.querySelectorAll('.effects__radio');
  const sliderElement = document.querySelector('.level-form__slider');
  const imgUploadPreview = document.querySelector('.img-upload__preview');

  noUiSlider.create(sliderElement, {
    range: {min: 0, max: 100},
    start: 80,
    step: 1,
    connect: 'lower',
  });
  const sliderElementContainer = document.querySelector('.effect-level__slider');
  sliderElementContainer.classList.add('hidden');

  effectsRadio.forEach((effect) => {
    effect.addEventListener('click', () => {
      let cssNameEffect = 'effects__preview--';

      imgUploadPreview.className = 'img-upload__preview';

      let cssName = effect.id.split('-');
      cssName = cssName[cssName.length-1];
      if (cssName !== 'none') {
        if (sliderElementContainer.classList.contains('hidden')) {
          sliderElementContainer.classList.remove('hidden');
        }
        cssNameEffect = cssNameEffect + cssName;
        imgUploadPreview.classList.add(cssNameEffect);
      } else {
        if (!sliderElementContainer.classList.contains('hidden')) {
          sliderElementContainer.classList.add('hidden');
        }
      }
      if ((cssName === 'chrome') || (cssName === 'sepia')) {
        sliderElement.noUiSlider.updateOptions({
          range: {min: 0, max: 1},
          start: 1,
          step: 0.1,
        });
      }
      if (cssName === 'marvin') {
        sliderElement.noUiSlider.updateOptions({
          range: {min: 0, max: 100},
          start: 100,
          step: 1,
        });
      }
      if (cssName === 'phobos') {
        sliderElement.noUiSlider.updateOptions({
          range: {min: 0, max: 3},
          start: 3,
          step: 0.1,
        });
      }
      if (cssName === 'heat') {
        sliderElement.noUiSlider.updateOptions({
          range: {min: 1, max: 3},
          start: 3,
          step: 0.1,
        });
      }

      let effectLevelValue;
      sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue = unencoded[handle];
        setupSlider(cssName, effectLevelValue);
      });
    });
  });
};

// Масштаб изображения
const setupImageScale = () => {
  const scaleControlValue = document.querySelector('.scale__control--value');
  const scaleControlSmaller = document.querySelector('.scale__control--smaller');
  const scaleControlBigger = document.querySelector('.scale__control--bigger');
  const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');
  let intScaleControlValue = +(scaleControlValue.value.slice(0, -1));

  const setScaleValues = () => {
    scaleControlValue.value = `${intScaleControlValue}%`;
    imgUploadPreviewImg.style.transform = `scale(${intScaleControlValue/100})`;
  };

  scaleControlSmaller.addEventListener('click', () => {
    if (intScaleControlValue >= 25) {
      intScaleControlValue -= 25;
    }
    if (intScaleControlValue < 25) {
      intScaleControlValue = 25;
    }
    setScaleValues();
  });

  scaleControlBigger.addEventListener('click', () => {
    if (intScaleControlValue <= 75) {
      intScaleControlValue += 25;
    }
    if (intScaleControlValue > 75) {
      intScaleControlValue = 100;
    }
    setScaleValues();
  });
  imageEffects();
};

export {setupImageScale};
