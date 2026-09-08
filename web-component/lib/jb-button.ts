import CSS from './jb-button.css';
import VariableCSS from './variables.css';
import { renderHTML, renderLoadingHTML } from './render';
import type { ElementsObject } from './types';
import { registerDefaultVariables } from 'jb-core/theme';
export * from "./types.js";
import { createMouseEvent, JBBaseComponent, parseBooleanAttribute, defineWebComponent } from 'jb-core';
void import("jb-loading");

export class JBButtonWebComponent extends JBBaseComponent {
  #internals?: ElementInternals;
  static formAssociated = true
  elements!: ElementsObject
  #isLoading = false;
  #loadingText = '';
  get isLoading() {
    return this.#isLoading;
  }
  set isLoading(value) {
    this.#isLoading = Boolean(value);
    this.toggleAttribute("is-loading", this.#isLoading);
    const ariaBusy = this.#isLoading ? "true" : "false";
    if (this.#isLoading) {
      this.#internals?.states?.add("loading");
    } else {
      this.#internals?.states?.delete("loading");
    }
    if (this.#internals) this.#internals.ariaBusy = ariaBusy;
    this.elements!.button.setAttribute("aria-busy", ariaBusy);
    if (this.#isLoading) {
      this.#renderLoading();
      this.elements!.button.classList.add('--loading');
    } else {
      this.elements!.button.classList.remove('--loading');
      this.elements!.button.querySelector('.loading-wrapper')?.remove();
    }
  }
  get loadingText() {
    return this.#loadingText;
  }
  set loadingText(value) {
    this.#loadingText = value;
    const loadingTextElement = this.elements!.button.querySelector<HTMLElement>('.loading-text');
    if (loadingTextElement) loadingTextElement.innerHTML = value;
  }
  #renderLoading() {
    if (this.elements!.button.querySelector('.loading-wrapper')) return;
    this.elements!.button.insertAdjacentHTML('beforeend', renderLoadingHTML());
    this.elements!.button.querySelector<HTMLElement>('.loading-text')!.innerHTML = this.#loadingText;
  }
  #disabled = false;
  get disabled() {
    return this.#disabled;
  }
  set disabled(value: boolean) {
    this.#disabled = value;
    this.elements.button.disabled = value;
    if (this.#internals) this.#internals.ariaDisabled = value ? "true" : "false";
    if (value) {
      this.#internals?.states?.add("disabled");
    } else {
      this.#internals?.states?.delete("disabled");
    }
  }
  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  get name(){
    return this.getAttribute("name") || "";
  }
  set name(value: string) {
    if(value){
      this.setAttribute('name', value);
    }else{
      this.removeAttribute('name');
    }
  }
  constructor() {
    super();
    if (typeof this.attachInternals == "function") {
      //some browser dont support attachInternals
      this.#internals = this.attachInternals();
      this.#internals.role = "button";
    }
    this.#initWebComponent();
  }
  #initWebComponent() {
    const shadowRoot = this.attachShadow({ mode: 'open', delegatesFocus: true, serializable:true, clonable:true });
    registerDefaultVariables();
    const html = `<style>${CSS} ${VariableCSS}</style>\n${renderHTML()}`;
    const element = document.createElement('template');
    element.innerHTML = html;
    shadowRoot.appendChild(element.content.cloneNode(true));
    this.elements = {
      button: shadowRoot.querySelector('button')!
    };
    this.#registerEventListener();
  }
  static get observedAttributes() {
    return ['name', 'is-loading', 'loading-text', 'type', 'button-style', 'disabled', 'aria-label'];
  }
  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    // do something when an attribute has changed
    this.#onAttributeChange(name, newValue);
  }
  #onAttributeChange(name: string, value: string) {
    switch (name) {
      case 'name':
        this.elements.button.setAttribute('name', value);
        break;
      case 'is-loading':
        this.isLoading = parseBooleanAttribute(value);
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
        this.disabled = parseBooleanAttribute(value);
        break;
      case 'aria-label':
        this.elements.button.setAttribute('aria-label', value);
        break;
    }
  }
  #registerEventListener(): void {
    this.elements.button.addEventListener("click", (e: MouseEvent) => this.#onButtonClick(e));
  }
  #onButtonClick(e: MouseEvent) {
    e.stopPropagation();
    const isNotCancelled = this.#dispatchClickEvent(e);
    if (isNotCancelled) {
      if (this.getAttribute('type') == "submit") {
        this.#internals?.form?.requestSubmit();
      }
    }else{
      e.preventDefault();
    }

  }
  #dispatchClickEvent(e: MouseEvent) {
    const event = createMouseEvent("click", e, {});
    return this.dispatchEvent(event);
  }
}
defineWebComponent('jb-button', JBButtonWebComponent);

declare global {
  interface HTMLElementTagNameMap {
    "jb-button": JBButtonWebComponent;
  }
}
