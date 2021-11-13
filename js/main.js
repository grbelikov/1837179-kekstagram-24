import {createArrayObject} from './data.js';
import {addContentToTemplate} from './paint-image.js';
import {activateUploadImage} from './form.js';
import {createLoader} from './api.js';


addContentToTemplate(createArrayObject());
activateUploadImage();
createLoader();
