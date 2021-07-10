import './sass/main.scss';
import { $render, $input, $button } from './js/variables.js';
import apiService from './js/apiService.js';
import card from './templation/cardTemplation.hbs';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import modal from './js/modal.js';

var debounce = require('lodash.debounce');

const fetchImage = new apiService();

function renderCard(currencies) {
    $render.insertAdjacentHTML('beforeend', card(currencies));
    $button.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}

function clearCard() {
    $render.innerHTML = '';
}

function addImage(e) {
    e.preventDefault();
    clearCard();
    fetchImage.search = e.target.value;
    fetchImage.restartValue();
    fetchImage.getImage().then(renderCard).catch();
}

function newImage() {
    fetchImage.getImage().then(renderCard);
}

$input.addEventListener('input', debounce(addImage, 1000));
$button.addEventListener('click', newImage);
