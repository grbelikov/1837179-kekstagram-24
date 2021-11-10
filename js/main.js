import {createArrayObject} from './data.js';
import {addContentToTemplate} from './paint-image.js';
import {activateUploadImage} from './form.js';
import {showMoreComments} from './comments-update.js';

showMoreComments();
addContentToTemplate(createArrayObject());
activateUploadImage();
