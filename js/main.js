import {activateUploadImage, closeUserModal} from './form.js';
import {createLoader} from './api.js';
import {setUserFormSubmit} from './api.js';

const loadData = createLoader();
loadData();
activateUploadImage();
setUserFormSubmit(closeUserModal);

