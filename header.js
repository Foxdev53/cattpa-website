class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <header>
      <img src="public/Logo {CATTPA _ CWMC}.png" alt="Logo" class="logo">
    <span>
     <a href="index.html">Home</a>
     </span>
     <span>
     <a href="cattpastaff.html">Cattpa staff</a>
     </span>
     <span>
     <a href="publicrecordshome.html">Public records</a>
     </span>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);