webpackJsonp([ 1 ], [ , , , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var lit_extended = __webpack_require__(1), lit_html = __webpack_require__(0), until = __webpack_require__(2);
    __webpack_require__(4);
    const fakeResource = new Promise((resolve, reject) => {
        setTimeout(() => resolve("[some useful data]"), 5e3);
    }), loading = lit_extended["html"]`<span>Loading...</span>`, header = lit_extended["html"]`
  <h3> Fake slow resourse: ${Object(until.until)(fakeResource, loading)}</h1>
`;
    let _sideeffectedcounter = 0;
    window.onload = function() {
        const bootstrapApplication = function(native) {
            console.log("bootstraping", document.body), function(Root, destination) {
                customElements.define(Root.is, Root);
            }(((base, native) => class extends(((base, native) => class extends base {
                constructor() {
                    super(), this.__native = native, this.needsRender = !1, this.root = this.attachShadow({
                        mode: "open"
                    });
                }
                async invalidate() {
                    this.needsRender || (this.needsRender = !0, await 0, this.needsRender = !1, Object(lit_extended.render)(this.render(), this.root));
                }
                render() {
                    return lit_extended["html"]``;
                }
                connectedCallback() {
                    console.log("connected");
                }
                disconnectedCallback() {
                    console.log("disconnected");
                }
                attributeChangedCallback(attrName, oldVal, newVal) {
                    console.log([ "attributeChanged", attrName, oldVal, newVal ]);
                }
            })(base, native)){
                static get is() {
                    return "lit-app";
                }
                get counter() {
                    return console.log("get counter"), this._counter || 0;
                }
                set counter(v) {
                    this._counter = v, this.invalidate();
                }
                constructor() {
                    super(), this.value1 = "value1", this.value2 = "value2", this._sideeffectedcounter = 0, 
                    this.counter = 0;
                }
                _inc(e) {
                    console.log("App:inc", e), this.counter++;
                }
                _dec(e) {
                    console.log("App:dec", e), this.counter--;
                }
                setValue1(e) {
                    this.value1 = "changed", this.invalidate();
                }
                setValue2(e) {
                    this.value2 = "changed";
                }
                get sideeffected_value() {
                    return this._sideeffectedcounter = this._sideeffectedcounter + 1, "local_" + this._sideeffectedcounter;
                }
                freeRun(f) {
                    return Object(lit_html.directive)(part => ("freeRun_interval" in this || (this.freeRunCounter = 0, 
                    this.freeRun_interval = setInterval(() => {
                        this.freeRunCounter = this.freeRunCounter + 1, part.setValue(this.freeRunCounter);
                    }, 1e3)), this.freeRunCounter));
                }
                disconnectedCallback() {
                    console.log("Stoping interval"), clearInterval(this.freeRun_interval);
                }
                get style() {
                    return lit_extended["html"]`
      <link rel="stylesheet" href="./app.css">
      <style>
        button {
          /*background-color: green;*/
        }
      </style>
    `;
                }
                get isNative() {
                    return this.__native ? lit_extended["html"]`<span>native</span>` : lit_extended["html"]`<span>emulating</span>`;
                }
                render() {
                    return lit_extended["html"]`
      ${this.style}
      <div>Webcomponents: ${this.isNative}</div>
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
        Side effects: ${this.sideeffected_value} / ${"global_" + (_sideeffectedcounter += 1)}
      </div>
      <div>
        free run counter: ${this.freeRun("what?")}
      </div>
    `;
                }
            })(HTMLElement, native), document.body);
        };
        "customElements" in window ? (console.log("native webcomponents is supported"), 
        bootstrapApplication(!0)) : (console.log("add webcomponents polyfills"), __webpack_require__(5)(function(fileJsExports) {
            bootstrapApplication(!1);
        }));
    };
}, function(module, exports) {}, function(module, exports, __webpack_require__) {
    var data, cbs = [];
    module.exports = function(cb) {
        cbs ? cbs.push(cb) : cb(data);
    }, __webpack_require__.e(0).then(function(require) {
        data = __webpack_require__(7);
        var callbacks = cbs;
        cbs = null;
        for (var i = 0, l = callbacks.length; i < l; i++) callbacks[i](data);
    }.bind(null, __webpack_require__)).catch(__webpack_require__.oe);
} ], [ 3 ]);
//# sourceMappingURL=app.js.map