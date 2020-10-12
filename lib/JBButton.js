import HTML from './JBButton.html';
import CSS from './JBButton.scss';
class JBButtonWebComponent extends HTMLElement {
    get isLoading() {
        return this._isLoading;
    }
    set isLoading(value) {
        this._isLoading = value;
        if (value == true) {
            this._buttonElement.classList.add('--loading');
        } else {
            this._buttonElement.classList.remove('--loading');
        }
    }
    get loadingText() {
        return this._shadowRoot.querySelector('loading-text').innerHTML;
    }
    set loadingText(value) {
        this._shadowRoot.querySelector('.loading-text').innerHTML = value;
    }
    constructor() {
        super();
        this.initWebComponent();
    }
    initWebComponent() {
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._html = `<style>${CSS}</style>` + '\n' + HTML;
        this._element = document.createElement('template');
        this._element.innerHTML = this._html;
        this._shadowRoot.appendChild(this._element.content.cloneNode(true));
        this._buttonElement = this._shadowRoot.querySelector('button');
    }
    static get observedAttributes() {
        return ['isLoading', 'loading-text', 'type', 'button-style', 'component-style'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // do something when an attribute has changed
        this.onAttributeChange(name, newValue);
    }
    onAttributeChange(name, value) {
        switch (name) {
            case 'isLoading':
                this.isLoading = Boolean(value);
                break;
            case 'loading-text':
                this.loadingText = value;
                break;
            case 'type':
                this._buttonElement.setAttribute('type', value);
                break;
            case 'button-style':
                this._buttonElement.style = value;
                break;
            case 'component-style':
                this.style = value;
                break;
        }
    }
}
const myElementNotExists = !customElements.get('jb-button');
if(myElementNotExists){
    window.customElements.define('jb-button', JBButtonWebComponent);
}

