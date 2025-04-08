import HTML from './jb-button.html';
import CSS from './jb-button.scss';
import { ElementsObject } from './types';
import { defineColors } from 'jb-core/theme/colors.js';
export * from "./types.js";
import 'jb-loading';
export class JBButtonWebComponent extends HTMLElement {
  #internals?: ElementInternals;
  static formAssociated = true
  elements?: ElementsObject
  #isLoading = false;
  get isLoading() {
    return this.#isLoading;
  }
  set isLoading(value) {
    this.#isLoading = value;
    if (value == true) {
      this.elements!.button.classList.add('--loading');
    } else {
      this.elements!.button.classList.remove('--loading');
    }
  }
  get loadingText() {
    return this.elements!.loadingText.innerHTML;
  }
  set loadingText(value) {
    this.elements!.loadingText.innerHTML = value;
  }
  #disabled = false;
  get disabled() {
    return this.#disabled;
  }
  set disabled(value: boolean) {
    this.#disabled = value;
    this.elements.button.disabled = value;
    if (value) {
      //TODO: remove as any when typescript support
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      this.#internals.states?.add("disabled");
    } else {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      this.#internals.states?.delete("disabled");
    }
  }
  constructor() {
    super();
    if (typeof this.attachInternals == "function") {
      //some browser dont support attachInternals
      this.#internals = this.attachInternals();
      this.#internals.role = "button";
    }
    this.initWebComponent();
  }
  initWebComponent() {
    const shadowRoot = this.attachShadow({ mode: 'open',delegatesFocus:true, });
    defineColors();
    const html = `<style>${CSS}</style>` + '\n' + HTML;
    const element = document.createElement('template');
    element.innerHTML = html;
    shadowRoot.appendChild(element.content.cloneNode(true));
    this.elements = {
      button: shadowRoot.querySelector('button')!,
      loadingText: shadowRoot.querySelector('.loading-text')!
    };
    this.#registerEventListener();
  }
  static get observedAttributes() {
    return ['name','isLoading', 'loading-text', 'type', 'button-style', 'disabled'];
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // do something when an attribute has changed
    this.onAttributeChange(name, newValue);
  }
  onAttributeChange(name: string, value: string) {
    switch (name) {
      case 'name':
        this.elements.button.setAttribute('name', value);
        break;
      case 'isLoading':
        this.isLoading = Boolean(value);
        break;
      case 'loading-text':
        this.loadingText = value;
        break;
      case 'type':
        this.elements!.button.setAttribute('type', value);
        break;
      case 'button-style':
        this.elements!.button.setAttribute('style', value);
        break;
      case 'disabled':
        if (value == "true" || value == "" || value == "disabled") {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
        break;
    }
  }
  #registerEventListener(): void {
    this.elements.button.addEventListener("click", (e: MouseEvent) => this.#onButtonClick(e));
  }
  #onButtonClick(e:MouseEvent){
    e.stopPropagation();
    this.#dispatchClickEvent(e);
    if(this.getAttribute('type') == "submit"){
      this.#internals?.form?.requestSubmit();
    }
  }
  #dispatchClickEvent(e:MouseEvent){
    const event = new MouseEvent('click',{...e});
    this.dispatchEvent(event);
  }
}
const myElementNotExists = !customElements.get('jb-button');
if (myElementNotExists) {
  window.customElements.define('jb-button', JBButtonWebComponent);
}

