import { html, render } from 'lit-html/lib/lit-extended';
// import { directive } from 'lit-html';
// console.log("directive=", directive);

// const myComponent = (f) => directive((part) => {
//   return f();
// });

const title = 'title';
const header = html`<h1>${title}</h1>`;

export class App {
  get counter() { return this._counter || 0;}
  set counter(v) { this._counter = v; this.invalidate(); }
  
  constructor(parent) {
    this.parent = parent;
    this.counter = 0;
  }
  
  _inc(e) {
    console.log('App:inc', e);
    this.counter++;
  }

  _dec(e) {
    console.log('App:dec', e);
    this.counter--;
  }
  
  render() {
    return html`
      ${header}
      <button on-click="${e => this._dec(e)}">-</button>
      ${this.counter}
      <button on-click="${e => this._inc(e)}">+</button>
    `;
  }
  
  invalidate() {
    // Not sure for reason. One line works fine.
    // render(this.render(), this.parent);
    if (!this.needsRender) {
      this.needsRender = true;
      Promise.resolve().then(() => {
        this.needsRender = false;
        render(this.render(), this.parent);
      });
    }
  }
}
