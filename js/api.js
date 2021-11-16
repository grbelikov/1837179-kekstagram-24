import {addContentToTemplateDefaultOrder} from './paint-image.js';
import {addContentToTemplateDescendingOrder} from './paint-image.js';
import {addContentToTemplateRandomOrder} from './paint-image.js';
import {debounce} from './utils/debounce.js';
import {showAlert} from './util.js';
import {URL_GET_DATA} from './consts.js';
import {ERROR_MESSAGES} from './consts.js';
import {URL_POST_DATA} from './consts.js';
import {RERENDER_DELAY} from './consts.js';
import {addSuccessSection} from './form.js';
import {showErrorBanner} from './form.js';
import {setupImgFilters} from './filter.js';
import {setRandomRankByClick} from './filter.js';
import {setDefaultRankByClick} from './filter.js';
import {setDiscussedRankByClick} from './filter.js';

const createLoader = () => () => fetch (URL_GET_DATA,
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    if (response.ok) {
      setupImgFilters();
      return response.json();
    }
    showAlert(ERROR_MESSAGES.errorNoDataReceived);
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    addContentToTemplateDefaultOrder(data);

    setDefaultRankByClick(debounce(
      () => addContentToTemplateDefaultOrder(data),
      RERENDER_DELAY,
    ));

    setRandomRankByClick(debounce(
      () => addContentToTemplateRandomOrder(data),
      RERENDER_DELAY,
    ));

    setDiscussedRankByClick(debounce(
      () => addContentToTemplateDescendingOrder(data),
      RERENDER_DELAY,
    ));
  })
  .catch(() => {
    showAlert(ERROR_MESSAGES.errorNoDataReceived);
  });

const setUserFormSubmit = (onSuccess) => {
  const imgUploadOverlay = document.querySelector('.img-upload__form');
  imgUploadOverlay.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    fetch(
      URL_POST_DATA,
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
          addSuccessSection();
        } else {
          showErrorBanner();
        }
      })
      .catch(() => {
        showErrorBanner();
        showAlert(ERROR_MESSAGES.errorFailedToSubmitForm);
      });
  });
};

export {createLoader};
export {setUserFormSubmit};
