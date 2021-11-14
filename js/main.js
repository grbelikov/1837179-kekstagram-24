import {activateUploadImage, closeUserModal} from './form.js';
import {createLoader} from './api.js';
import {setUserFormSubmit} from './api.js';

const loadData = createLoader(console.log, console.error);
loadData();
activateUploadImage();
setUserFormSubmit(closeUserModal);
