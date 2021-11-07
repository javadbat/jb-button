import HTML from './JBButton.html';
import CSS from './JBButton.scss';
class JBButtonWebComponent extends HTMLElement {
    get isLoading() {
        return this._isLoading;
    }
    set isLoading(value) {
        this._isLoading = value;
        if (value == true) {
            this.elements.button.classList.add('--loading');
        } else {
            this.elements.button.classList.remove('--loading');
        }
    }
    get loadingText() {
        return this.shadowRoot.querySelector('loading-text').innerHTML;
    }
    set loadingText(value) {
        this.shadowRoot.querySelector('.loading-text').innerHTML = value;
    }
    constructor() {
        super();
        this.initWebComponent();
    }
    initWebComponent() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const html = `<style>${CSS}</style>` + '\n' + HTML;
        const element = document.createElement('template');
        element.innerHTML = html;
        shadowRoot.appendChild(element.content.cloneNode(true));
        this.elements = {
            button: shadowRoot.querySelector('button')
        };
    }
    static get observedAttributes() {
        return ['isLoading', 'loading-text', 'type', 'button-style', 'component-style','disabled'];
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
                this.elements.button.setAttribute('type', value);
                break;
            case 'button-style':
                this.elements.button.style = value;
                break;
            case 'component-style':
                this.style = value;
                break;
            case 'disabled':
                if(value == "true" || value == "" || value == "disabled"){
                    this.elements.button.setAttribute('disabled', "disabled");
                }else{
                    this.elements.button.removeAttribute('disabled');
                }
                break;
        }
    }
}
const myElementNotExists = !customElements.get('jb-button');
if(myElementNotExists){
    window.customElements.define('jb-button', JBButtonWebComponent);
}

