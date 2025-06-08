export function renderHTML(): string {
  return /* html */ `
  <div class="jb-button-web-component">
    <button>
        <slot class="button-content"></slot>
        <div class="loading-wrapper">
            <jb-loading></jb-loading>
            <div class="loading-text"></div>
        </div>
    </button>
  </div>
      `;
}