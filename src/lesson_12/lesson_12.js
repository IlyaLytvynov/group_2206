import './lesson_12.scss';
import { LighterController } from './scripts/lighterController';
import { Light } from './scripts/light';

const control = new LighterController(document.querySelector('body'));
const someLight = new Light(document.querySelector('body'));
const someLight2 = new Light(document.querySelector('body'), 'lime');
const someLight3 = new Light(document.querySelector('body'), 'red');
const someLight4 = new Light(document.querySelector('body'), 'rgba(0,0,0,.5)', () => console.log('TOGGLE'));