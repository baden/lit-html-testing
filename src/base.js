import { html, render } from 'lit-html/lib/lit-extended';

export const BaseConstructor = (base, native) =>
class Base extends base {
  constructor() {
    super();
    this.__native = native;
    this.needsRender = false;
    this.root = this.attachShadow({mode: 'open'});
  }

  async invalidate() {
    if (!this.needsRender) {
      this.needsRender = true;
      await 0;
      this.needsRender = false;
      render(this.render(), this.root);
    }
  }
          
  // invalidate() {
  //   // Not sure for reason. One line works fine too.
  //   // render(this.render(), this.parent);
  //   if (!this.needsRender) {
  //     this.needsRender = true;
  //     Promise.resolve().then(() => {
  //       this.needsRender = false;
  //       if(ng) {
  //         render(this.render(), this.shadowRoot);
  //       } else {
  //         console.log(["TBD", this]);
  //         render(this.render(), this.parent);
  //       }
  //     });
  //   }
  // }
  
  render() {
    return html``;
  }    

  connectedCallback() {
    console.log('connected');
  }

  disconnectedCallback() {
    console.log('disconnected');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(['attributeChanged', attrName, oldVal, newVal]);
    // TODO: https://github.com/kenchris/lit-element/blob/master/src/lit-element.ts
    // this.invalidate();
  }

};

export function bootstrap(Root, destination) {
  customElements.define(Root.is, Root);
}
