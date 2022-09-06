export class MyComponent extends HTMLElement {
	static get tag() { return 'my-component'; }
	constructor() {
		super();
	}
}

window.customElements.define(MyComponent.tag, MyComponent);
