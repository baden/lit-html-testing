!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 3);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_exports__.f = function(result, container, partCallback = defaultPartCallback) {
        let instance = container.__templateInstance;
        if (void 0 !== instance && instance.template === result.template && instance._partCallback === partCallback) return void instance.update(result.values);
        instance = new TemplateInstance(result.template, partCallback), container.__templateInstance = instance;
        const fragment = instance._clone();
        instance.update(result.values);
        let child;
        for (;child = container.lastChild; ) container.removeChild(child);
        container.appendChild(fragment);
    };
    /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
    const envCachesTemplates = (t => t() == t())(() => s => s``), templates = new Map();
    new Map(), __webpack_exports__.e = ((strings, ...values) => (function(strings, values, templates, isSvg) {
        const key = envCachesTemplates ? strings : strings.join("{{--uniqueness-workaround--}}");
        let template = templates.get(key);
        return void 0 === template && (template = new Template(strings, !1), templates.set(key, template)), 
        new TemplateResult(template, values);
    })(strings, values, templates));
    class TemplateResult {
        constructor(template, values) {
            this.template = template, this.values = values;
        }
    }
    const attributeMarker = `{{lit-${Math.random()}}}`, textRegex = />[^<]*$/, hasTagsRegex = /[^<]*/, attrOrTextRegex = new RegExp(`${attributeMarker}|\x3c!--_-lit-html-_--\x3e`);
    class TemplatePart {
        constructor(type, index, name, rawName, strings) {
            this.type = type, this.index = index, this.name = name, this.rawName = rawName, 
            this.strings = strings;
        }
    }
    class Template {
        constructor(strings, svg = !1) {
            this.parts = [], this.svg = svg, this.element = document.createElement("template"), 
            this.element.innerHTML = this._getHtml(strings, svg);
            const walker = document.createTreeWalker(this.element.content, 133, null, !1);
            let index = -1, partIndex = 0;
            const nodesToRemove = [];
            let previousNode, currentNode;
            for (;walker.nextNode(); ) {
                index++, previousNode = currentNode;
                const node = currentNode = walker.currentNode;
                if (1 === node.nodeType) {
                    if (!node.hasAttributes()) continue;
                    const attributes = node.attributes;
                    for (let i = 0; i < attributes.length; i++) {
                        const attribute = attributes.item(i), attributeStrings = attribute.value.split(attrOrTextRegex);
                        if (attributeStrings.length > 1) {
                            const attributeString = strings[partIndex], rawName = attributeString.substring(0, attributeString.length - attributeStrings[0].length).match(/((?:\w|[.\-_$])+)=["']?$/)[1];
                            this.parts.push(new TemplatePart("attribute", index, attribute.name, rawName, attributeStrings)), 
                            node.removeAttribute(attribute.name), partIndex += attributeStrings.length - 1, 
                            i--;
                        }
                    }
                } else if (3 === node.nodeType) {
                    const nodeValue = node.nodeValue, strings = nodeValue.split(attributeMarker);
                    if (strings.length > 1) {
                        const parent = node.parentNode, lastIndex = strings.length - 1;
                        partIndex += lastIndex, node.textContent = strings[lastIndex];
                        for (let i = 0; i < lastIndex; i++) parent.insertBefore(document.createTextNode(strings[i]), node), 
                        this.parts.push(new TemplatePart("node", index++));
                    } else {
                        const previousSibling = node.previousSibling, nextSibling = node.nextSibling;
                        null !== previousSibling && 1 !== previousSibling.nodeType || null !== nextSibling && 1 !== nextSibling.nodeType || "" !== nodeValue.trim() || (nodesToRemove.push(node), 
                        currentNode = previousNode, index--);
                    }
                } else if (8 === node.nodeType && "_-lit-html-_" === node.nodeValue) {
                    const parent = node.parentNode;
                    null === node.previousSibling || node.previousSibling !== previousNode ? parent.insertBefore(new Text(), node) : index--, 
                    this.parts.push(new TemplatePart("node", index++)), nodesToRemove.push(node), null === node.nextSibling ? parent.insertBefore(new Text(), node) : index--, 
                    currentNode = previousNode, partIndex++;
                }
            }
            for (const n of nodesToRemove) n.parentNode.removeChild(n);
        }
        _getHtml(strings, svg) {
            const l = strings.length, a = [];
            let isTextBinding = !1;
            for (let i = 0; i < l - 1; i++) {
                const s = strings[i];
                a.push(s), isTextBinding = null !== s.match(textRegex) || null !== s.match(hasTagsRegex) && isTextBinding, 
                a.push(isTextBinding ? "\x3c!--_-lit-html-_--\x3e" : attributeMarker);
            }
            a.push(strings[l - 1]);
            const html = a.join("");
            return svg ? `<svg>${html}</svg>` : html;
        }
    }
    const getValue = (part, value) => (null != value && !0 === value.__litDirective && (value = value(part)), 
    null === value ? void 0 : value);
    __webpack_exports__.d = getValue, __webpack_exports__.c = (f => (f.__litDirective = !0, 
    f));
    class AttributePart {
        constructor(instance, element, name, strings) {
            this.instance = instance, this.element = element, this.name = name, this.strings = strings, 
            this.size = strings.length - 1;
        }
        setValue(values, startIndex) {
            const strings = this.strings;
            let text = "";
            for (let i = 0; i < strings.length; i++) if (text += strings[i], i < strings.length - 1) {
                const v = getValue(this, values[startIndex + i]);
                if (v && (Array.isArray(v) || "string" != typeof v && v[Symbol.iterator])) for (const t of v) text += t; else text += v;
            }
            this.element.setAttribute(this.name, text);
        }
    }
    __webpack_exports__.a = AttributePart;
    class NodePart {
        constructor(instance, startNode, endNode) {
            this.instance = instance, this.startNode = startNode, this.endNode = endNode, this._previousValue = void 0;
        }
        setValue(value) {
            if (null === (value = getValue(this, value)) || "object" != typeof value && "function" != typeof value) {
                if (value === this._previousValue) return;
                this._setText(value);
            } else value instanceof TemplateResult ? this._setTemplateResult(value) : Array.isArray(value) || value[Symbol.iterator] ? this._setIterable(value) : value instanceof Node ? this._setNode(value) : void 0 !== value.then ? this._setPromise(value) : this._setText(value);
        }
        _insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
        }
        _setNode(value) {
            this.clear(), this._insert(value), this._previousValue = value;
        }
        _setText(value) {
            const node = this.startNode.nextSibling;
            node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE ? node.textContent = value : this._setNode(document.createTextNode(void 0 === value ? "" : value)), 
            this._previousValue = value;
        }
        _setTemplateResult(value) {
            let instance;
            this._previousValue && this._previousValue.template === value.template ? instance = this._previousValue : (instance = new TemplateInstance(value.template, this.instance._partCallback), 
            this._setNode(instance._clone()), this._previousValue = instance), instance.update(value.values);
        }
        _setIterable(value) {
            Array.isArray(this._previousValue) || (this.clear(), this._previousValue = []);
            const itemParts = this._previousValue;
            let partIndex = 0;
            for (const item of value) {
                let itemPart = itemParts[partIndex];
                if (void 0 === itemPart) {
                    let itemStart = this.startNode;
                    partIndex > 0 && (itemStart = itemParts[partIndex - 1].endNode = document.createTextNode(""), 
                    this._insert(itemStart)), itemPart = new NodePart(this.instance, itemStart, this.endNode), 
                    itemParts.push(itemPart);
                }
                itemPart.setValue(item), partIndex++;
            }
            if (0 === partIndex) this.clear(), this._previousValue = void 0; else if (partIndex < itemParts.length) {
                const lastPart = itemParts[partIndex - 1];
                itemParts.length = partIndex, this.clear(lastPart.endNode.previousSibling), lastPart.endNode = this.endNode;
            }
        }
        _setPromise(value) {
            value.then(v => {
                this._previousValue === value && this.setValue(v);
            }), this._previousValue = value;
        }
        clear(startNode = this.startNode) {
            let node;
            for (;(node = startNode.nextSibling) !== this.endNode; ) node.parentNode.removeChild(node);
        }
    }
    const defaultPartCallback = (instance, templatePart, node) => {
        if ("attribute" === templatePart.type) return new AttributePart(instance, node, templatePart.name, templatePart.strings);
        if ("node" === templatePart.type) return new NodePart(instance, node, node.nextSibling);
        throw new Error(`Unknown part type ${templatePart.type}`);
    };
    __webpack_exports__.b = defaultPartCallback;
    class TemplateInstance {
        constructor(template, partCallback = defaultPartCallback) {
            this._parts = [], this.template = template, this._partCallback = partCallback;
        }
        update(values) {
            let valueIndex = 0;
            for (const part of this._parts) void 0 === part.size ? (part.setValue(values[valueIndex]), 
            valueIndex++) : (part.setValue(values, valueIndex), valueIndex += part.size);
        }
        _clone() {
            const fragment = document.importNode(this.template.element.content, !0);
            if (this.template.parts.length > 0) {
                const walker = document.createTreeWalker(fragment, 133, null, !1), parts = this.template.parts;
                let index = 0, partIndex = 0, templatePart = parts[0], node = walker.nextNode();
                for (;null != node && partIndex < parts.length; ) index === templatePart.index ? (this._parts.push(this._partCallback(this, templatePart, node)), 
                templatePart = parts[++partIndex]) : (index++, node = walker.nextNode());
            }
            if (this.template.svg) {
                const svgElement = fragment.firstChild;
                fragment.removeChild(svgElement);
                const nodes = svgElement.childNodes;
                for (let i = 0; i < nodes.length; i++) fragment.appendChild(nodes.item(i));
            }
            return fragment;
        }
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_exports__.b = /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
    function(result, container) {
        Object(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__.f)(result, container, extendedPartCallback);
    };
    var __WEBPACK_IMPORTED_MODULE_0__lit_html_js__ = __webpack_require__(0);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_0__lit_html_js__.e;
    });
    const extendedPartCallback = (instance, templatePart, node) => {
        if ("attribute" === templatePart.type) {
            if (templatePart.rawName.startsWith("on-")) {
                const eventName = templatePart.rawName.substring(3);
                return new EventPart(instance, node, eventName);
            }
            if (templatePart.name.endsWith("$")) {
                const name = templatePart.name.substring(0, templatePart.name.length - 1);
                return new __WEBPACK_IMPORTED_MODULE_0__lit_html_js__.a(instance, node, name, templatePart.strings);
            }
            return new PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__.b)(instance, templatePart, node);
    };
    class PropertyPart extends __WEBPACK_IMPORTED_MODULE_0__lit_html_js__.a {
        setValue(values, startIndex) {
            const s = this.strings;
            let value;
            if (2 === s.length && "" === s[0] && "" === s[s.length - 1]) value = Object(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__.d)(this, values[startIndex]); else {
                value = "";
                for (let i = 0; i < s.length; i++) value += s[i], i < s.length - 1 && (value += Object(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__.d)(this, values[startIndex + i]));
            }
            this.element[this.name] = value;
        }
    }
    class EventPart {
        constructor(instance, element, eventName) {
            this.instance = instance, this.element = element, this.eventName = eventName;
        }
        setValue(value) {
            const listener = Object(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__.d)(this, value);
            listener !== this._listener && (null == listener ? this.element.removeEventListener(this.eventName, this) : null == this._listener && this.element.addEventListener(this.eventName, this), 
            this._listener = listener);
        }
        handleEvent(event) {
            "function" == typeof this._listener ? this._listener.call(this.element, event) : "function" == typeof this._listener.handleEvent && this._listener.handleEvent(event);
        }
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_exports__.c = function() {
        return "customElements" in window ? "customElements is supported" : "customElements is not supported";
    }, __webpack_exports__.b = function() {
        const baseClass = ng ? HTMLElement : class {};
        return class extends baseClass {
            constructor(parent) {
                super(), this.needsRender = !1, ng ? this.root = this.attachShadow({
                    mode: "open"
                }) : (console.log("parent=", parent), this.root = parent), ng || document.body.addEventListener("DOMNodeRemoved", this._handleRemove.bind(this));
            }
            _handleRemove(e) {
                e.target === this.root && (console.log([ "Removed: ", e, this ]), this.disconnectedCallback());
            }
            async invalidate() {
                this.needsRender || (this.needsRender = !0, await 0, this.needsRender = !1, Object(__WEBPACK_IMPORTED_MODULE_0_lit_html_lib_lit_extended__.b)(this.render(), this.root));
            }
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_lit_html_lib_lit_extended__["a"]``;
            }
        };
    }, __webpack_exports__.a = function(Root, destination) {
        if (console.log("bootstraping", destination), console.log("Root.as=", Root.is), 
        ng) {
            customElements.define(Root.is, Root);
            const el = document.createElement(Root.is);
            destination.appendChild(el);
        } else {
            const el = document.createElement(Root.is);
            new Root(el), destination.appendChild(el);
        }
    };
    var __WEBPACK_IMPORTED_MODULE_0_lit_html_lib_lit_extended__ = __webpack_require__(1);
    const ng = "customElements" in window;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(2);
    console.log("bootstraping", document.body), Object(__WEBPACK_IMPORTED_MODULE_1__base__.a)(__WEBPACK_IMPORTED_MODULE_0__app_js__.a, document.body);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lit_html_lib_lit_extended__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_1_lit_html__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_2_lit_html_lib_until__ = __webpack_require__(5), __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(2);
    __webpack_require__(6);
    const fakeResource = new Promise((resolve, reject) => {
        setTimeout(() => resolve("boo"), 5e3);
    }), loading = __WEBPACK_IMPORTED_MODULE_0_lit_html_lib_lit_extended__["a"]`<span>Loading...</span>`, header = __WEBPACK_IMPORTED_MODULE_0_lit_html_lib_lit_extended__["a"]`
  <h1>${Object(__WEBPACK_IMPORTED_MODULE_3__base__.c)()} : ${Object(__WEBPACK_IMPORTED_MODULE_2_lit_html_lib_until__.a)(fakeResource, loading)}</h1>
`;
    let _sideeffectedcounter = 0;
    class App extends(Object(__WEBPACK_IMPORTED_MODULE_3__base__.b)()){
        static get is() {
            return "lit-app";
        }
        get counter() {
            return console.log("get counter"), this._counter || 0;
        }
        set counter(v) {
            this._counter = v, this.invalidate();
        }
        constructor(parent) {
            super(parent), this.value1 = "value1", this.value2 = "value2", this._sideeffectedcounter = 0, 
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
            return Object(__WEBPACK_IMPORTED_MODULE_1_lit_html__.c)(part => ("freeRun_interval" in this || (this.freeRunCounter = 0, 
            this.freeRun_interval = setInterval(() => {
                this.freeRunCounter = this.freeRunCounter + 1, part.setValue(this.freeRunCounter);
            }, 1e3)), this.freeRunCounter));
        }
        disconnectedCallback() {
            clearInterval(this.freeRun_interval);
        }
        get style() {
            return __WEBPACK_IMPORTED_MODULE_0_lit_html_lib_lit_extended__["a"]`
      <link rel="stylesheet" href="./app.css">
      <style>
        button {
          /*background-color: green;*/
        }
      </style>
    `;
        }
        render() {
            return __WEBPACK_IMPORTED_MODULE_0_lit_html_lib_lit_extended__["a"]`
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
        Side effects: ${this.sideeffected_value} / ${"global_" + (_sideeffectedcounter += 1)}
      </div>
      <div>
        free run counter: ${this.freeRun("what?")}
      </div>
    `;
        }
    }
    __webpack_exports__.a = App, console.log([ "App = ", App ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__lit_html_js__ = __webpack_require__(0);
    __webpack_exports__.a = ((promise, defaultContent) => Object(__WEBPACK_IMPORTED_MODULE_0__lit_html_js__.c)(part => (part.setValue(defaultContent), 
    promise)));
}, function(module, exports) {} ]);
//# sourceMappingURL=bundle.js.map