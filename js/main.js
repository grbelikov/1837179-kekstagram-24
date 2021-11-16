import {activateUploadImage, closeUserModal} from './form.js';
import {createLoader} from './api.js';
import {setUserFormSubmit} from './api.js';

createLoader()();
activateUploadImage();
setUserFormSubmit(closeUserModal);

