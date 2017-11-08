import { html, render } from 'lit-html/lib/lit-extended';

// const app_style = require('./app.css');


const ng = ('customElements' in window);
// const ng = false;

export function isNg() {
  if('customElements' in window) {
    return 'customElements is supported';
  } else {
    return 'customElements is not supported';
  }
}

export function constructBase() {
  
  const baseClass = ng ? HTMLElement : class {};
  
  return class extends baseClass {
    constructor(parent) {
      console.log("parent=", parent);
      super();
      this.needsRender = false;
      // this.parent = parent;
      this.root = parent;
      if(ng) {
        this.root = this.attachShadow({mode: 'open'});
        // console.log(["root=", root, this.shadowRoot]);
      }
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
  };
}

export function bootstrap(Root, destination) {
  if(ng) {
    console.log("Root.as=", Root.is);
    customElements.define(Root.is, Root);
    const el = document.createElement(Root.is);
    destination.appendChild(el);
  } else {
    new Root(destination);
  }
}
