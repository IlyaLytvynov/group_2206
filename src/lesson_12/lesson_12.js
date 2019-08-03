import './lesson_12.scss';
import { TrafficLighter } from './scripts/treafficLighter';

const test = [];
const lighter = new TrafficLighter(document.querySelector('.container'), 'TEST');
const lighter2 = new TrafficLighter(document.querySelector('.container'), 'MY COOL LIGHTER');
const lighter3 = new TrafficLighter(document.querySelector('.container'), 'OTHER LIGHTER');
console.log(lighter);
window.lighter = lighter;

lighter.toggleOffAll();
lighter2.toggleOffAll();