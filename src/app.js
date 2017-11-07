import { html, render } from 'lit-html/lib/lit-extended';

export class App {
  get name() { return this._name;}
  set name(v) { this._name = v; this.invalidate(); }
  
  constructor(parent) {
    this.parent = parent;
    this.name = 'world';
  }
  
  _click(e) {
    console.log('App:click', e);
    this.name = 'whole universe';
  }
  
  render() {
    return html`
      <button class="greater" on-click="${e => this._click(e)}">
        Hello, ${this.name}!
      </button>
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
