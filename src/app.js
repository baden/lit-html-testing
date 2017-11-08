import { html } from 'lit-html/lib/lit-extended';
import { directive } from 'lit-html';
import { until } from 'lit-html/lib/until';
import { constructBase, isNg } from './base';
require('./app.css');

// console.log("directive=", directive);

// const myComponent = (f) => directive((part) => {
//   return f();
// });

// HINT: I not understad who call render when resolve.
const fakeResource = new Promise((resolve, reject) => {
  setTimeout(() => resolve("boo"), 5000);
});

const loading = html`<span>Loading...</span>`;

const title = 'title';
const header = html`
  <h1>${isNg()} : ${
    until(
      fakeResource,
      loading
    )}</h1>
`;

let _sideeffectedcounter = 0;
const sideeffected_value = function() {
  _sideeffectedcounter = _sideeffectedcounter + 1;
  return "global_" + _sideeffectedcounter;
};

// const inc1 = (promise, content) =>
//   directive((part) => {
//     part.setValue(content);
//     return promise;
//   });

export class App extends constructBase() {
  static get is() {
    return 'lit-app';
  }
      
  get counter() { console.log("get counter"); return this._counter || 0;}
  set counter(v) { this._counter = v; this.invalidate(); }
  
  // constructor() {
  constructor(parent) {
    super(parent);
    // super();
    this.value1 = 'value1';
    this.value2 = 'value2';
    this._sideeffectedcounter = 0;
    this.counter = 0; // Will call this.invalidate() and render element
  }
  
  _inc(e) {
    console.log('App:inc', e);
    this.counter++; // Will call this.invalidate() and render element
  }

  _dec(e) {
    console.log('App:dec', e);
    this.counter--; // Will call this.invalidate() and render element
  }
  
  setValue1(e) {
    this.value1 = 'changed';
    this.invalidate();  // Call render
  }

  setValue2(e) {
    this.value2 = 'changed';
    // this.invalidate();  // Call render
  }

  get sideeffected_value() {
    this._sideeffectedcounter = this._sideeffectedcounter + 1;
    return "local_" + this._sideeffectedcounter;
  }

  // Demonstrate incorrect observable value
  freeRun(f) {
    this.freeRunCounter = 0;  // will be reseted on each render() call
    return directive((part) => {
      // console.log(["freeRun", f, part, part.previousValue]);
      
      // will launch a new interval runner on each render() call
      setInterval(() => {
        // console.log(["freeRun_interval", f, part, part.previousValue]);
        this.freeRunCounter = this.freeRunCounter + 1;
        part.setValue(this.freeRunCounter);
      }, 1000);
      // return html`<div>freRun: ${this.freeRunCounter}</div>`;
      return this.freeRunCounter;
    });
  }


  // TODO: Test isolated styles
  get style() {
    return html`
      <link rel="stylesheet" href="./app.css">
      <style>
        button {
          /*background-color: green;*/
        }
      </style>
    `;
  }
  
  render() {
    return html`
      ${this.style}
      ${header}
      <div class="content">
        <button on-click="${e => this._dec(e)}">-</button>
        <span>${this.counter}</span>
        <button on-click="${e => this._inc(e)}">+</button>
      </div>
      <div>
        <button on-click="${e => this.setValue1(e)}">Change me with invalidate</button>
        Value: ${this.value1}
      </div>
      <div>
        <button on-click="${e => this.setValue2(e)}">Change me without invalidate</button>
        Value: ${this.value2}
      </div>
      <div>
        Side effects: ${this.sideeffected_value} / ${sideeffected_value()}
      </div>
      <div>
        free run counter: ${this.freeRun('what?')}
      </div>
    `;
  }
}
// ${directive((part) => part.setValue((part.previousValue + 1) || 0))}

console.log(["App = ", App]);
