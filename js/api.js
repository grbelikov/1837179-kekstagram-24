import {addContentToTemplate} from './paint-image.js';
import {showAlert} from './util.js';
import {URL_GET_DATA} from './consts.js';
import {ERROR_MESSAGES} from './consts.js';
import {URL_POST_DATA} from './consts.js';
import {showSuccessBanner} from './form.js';
import {showErrorBanner} from './form.js';
import {setupImgFilters} from './filter.js';

const createLoader = (onSuccess, onError) => () => fetch (URL_GET_DATA,
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
    onSuccess(data);
    addContentToTemplate(data);
  })
  .catch((err) => {
    showAlert(ERROR_MESSAGES.errorNoDataReceived);
    onError(err);
  });

const setUserFormSubmit = (onSuccess) => {
  const imgUploadOverlay = document.querySelector('.img-upload__form');
  imgUploadOverlay.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    fetch (
      URL_POST_DATA,
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
          showSuccessBanner();
        } else {
          showErrorBanner();
        }
      })
      .catch(() => {
        showAlert(ERROR_MESSAGES.errorFailedToSubmitForm);
      });
  });
};

export {createLoader};
export {setUserFormSubmit};
