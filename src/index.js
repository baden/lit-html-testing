import { AppConstructor } from './app.js';
import { bootstrap } from './base';

// if(!('customElements' in window)) {
//   const loader = require('@webcomponents/webcomponentsjs!');
//   console.log('on demand loader', loader);
// }
// window.bootstrapApplication = async function () {
//   const promises = [];
//   if (!('customElements' in window)) {
//     // promises.push(System.import('@webcomponents/custom-elements/custom-elements.min.js'));
//     promises.push(System.import('@webcomponents/webcomponentsjs/webcomponents-lite.js'));
//   } else {
//     promises.push(System.import('@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'));
//   }
//   console.log('promises =', promises);
//   // await Promise.all(promises);
// }

// bootstrapApplication();


window.onload = function() {
  const bootstrapApplication = function (native) {
    console.log("bootstraping", document.body);
    bootstrap(AppConstructor(HTMLElement, native), document.body);
  }

  if (!('customElements' in window)) {
    console.log("add webcomponents polyfills");
    require("bundle-loader?lazy?name=webcomponents!@webcomponents/webcomponentsjs")(function(fileJsExports) {
      bootstrapApplication(false);
    });
  } else {
    console.log("native webcomponents is supported");
    // require("bundle-loader!@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js")(function(fileJsExports) {
      bootstrapApplication(true);
    // });
  }  
};

// const app = new App(document.body);
// const app = new App();



// document.body.app

// window.addEventListener('touchend', function (e) {
//     console.log(e);
//     e.preventDefault();
//     var event = new Event('click');
//     e.target.dispatchEvent(event);
// });
