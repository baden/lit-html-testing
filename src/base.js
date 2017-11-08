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
      super();
      this.needsRender = false;
      // this.parent = parent;
      if(ng) {
        this.root = this.attachShadow({mode: 'open'});
        // console.log(["root=", root, this.shadowRoot]);
      } else {
        console.log("parent=", parent);
        this.root = parent;
      }

      // this._observer = new MutationObserver(this._handleMutations.bind(this));
      // this._observer.observe(/*parent*/ this.root, {
      //   childList: true,
      //   subtree: true,
      // });

      // Fast and dirty disconnectedCallback emulation
      // This is bad idea. Use MutationObserver insteed
      if(!ng) {
        document.body.addEventListener("DOMNodeRemoved", this._handleRemove.bind(this));
      }
    }

    _handleRemove(e) {
      if(e.target === this.root) {
        console.log(["Removed: ", e, this]);
        this.disconnectedCallback();
      }
    }
    // _handleMutations(mutations) {
    //   const readyState = this.root.readyState;
    //   console.log(["simple mutation handle", mutations, this, readyState]);
    // }

  
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
  console.log("bootstraping", destination);
  console.log("Root.as=", Root.is);
  if(ng) {
    customElements.define(Root.is, Root);
    const el = document.createElement(Root.is);
    destination.appendChild(el);
  } else {
    const el = document.createElement(Root.is);
    const _el = new Root(el);
    // console.log(["el=", el, _el]);
    destination.appendChild(el);
  }
}
