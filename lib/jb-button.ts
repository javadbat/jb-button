import HTML from './jb-button.html';
import CSS from './jb-button.scss';
import { ElementsObject } from './types';
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
  constructor() {
    super();
    if (typeof this.attachInternals == "function") {
      //some browser dont support attachInternals
      this.#internals = this.attachInternals();
    }
    this.initWebComponent();
  }
  initWebComponent() {
    const shadowRoot = this.attachShadow({ mode: 'open',delegatesFocus:true, });
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
    return ['isLoading', 'loading-text', 'type', 'button-style', 'disabled'];
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // do something when an attribute has changed
    this.onAttributeChange(name, newValue);
  }
  onAttributeChange(name: string, value: string) {
    switch (name) {
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
          this.elements!.button.setAttribute('disabled', "disabled");
        } else {
          this.elements!.button.removeAttribute('disabled');
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

