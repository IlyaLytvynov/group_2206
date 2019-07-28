import './lesson_11.scss';
import { Button } from './scripts/button';
import { TraficLighter } from './scripts/treafficLighter';

const test = [];

function showModal () {
  const str = prompt('Enter text');
  test.push(str);
}

const btn1 = new Button('Hello ', showModal);
const lighter = new TraficLighter();