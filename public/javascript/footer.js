class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer>
      <center>
      This Site is managed by Coolwolfmc and was Developed by Fox Development. 
      <center>  
      </footer>
      

      `;
    }
  }
  
  customElements.define('my-footer' ,  Footer);