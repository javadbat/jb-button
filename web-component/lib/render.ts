export function renderHTML(): string {
  return /* html */ `
  <div class="jb-button-web-component">
    <button>
        <slot class="button-content"></slot>
        <div class="loading-wrapper" aria-hidden="true">
            <jb-loading aria-hidden="true"></jb-loading>
            <div class="loading-text"></div>
        </div>
    </button>
  </div>
      `;
}
