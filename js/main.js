import {createCards} from './create-cards.js';
import {renderCards} from './render-cards.js';
import './uploadImageForm.js';

const CARDS_COUNT = 25;

renderCards(createCards(CARDS_COUNT));
