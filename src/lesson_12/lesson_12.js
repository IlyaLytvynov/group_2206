import './lesson_12.scss';
import { TrafficLighter } from './scripts/trafficLighter';
import { TrafficLighterES6 } from './scripts/trafficLighterES2015';

const test = [];
const lighter = new TrafficLighter(document.querySelector('.container'), 'TEST');
const lighter2 = new TrafficLighterES6(document.querySelector('.container'), 'MY COOL LIGHTER');
console.log(lighter);
window.lighter = lighter;
window.lighter2 = lighter2;