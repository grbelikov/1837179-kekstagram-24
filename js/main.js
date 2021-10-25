import {createArrayObject} from './data.js';
import {createTemplate} from './paint-pictures.js';

createArrayObject().forEach((comment) => createTemplate(comment));
