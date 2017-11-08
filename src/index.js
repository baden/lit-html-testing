// import loader from '@webcomponents/webcomponentsjs';
import { App } from './app.js';
import { bootstrap } from './base';

// const app = new App(document.body);
// const app = new App();

console.log("bootstraping", document.body);

bootstrap(App, document.body);

// document.body.app

// window.addEventListener('touchend', function (e) {
//     console.log(e);
//     e.preventDefault();
//     var event = new Event('click');
//     e.target.dispatchEvent(event);
// });
