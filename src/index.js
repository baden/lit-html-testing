import { App } from './app.js';
require('./app.css');

const app = new App(document.body);

window.addEventListener('touchend', function (e) {
    console.log(e);
    e.preventDefault();
    var event = new Event('click');
    e.target.dispatchEvent(event);
});
