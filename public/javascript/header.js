class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <header>
      <img src="public/img/Logo.png" alt="Logo" class="logo">
    <span>
     <a href="index.html">Home</a>
     </span>
     <span>
     <a href="cattpastaff.html">Staff of cattpa</a>
     </span>
     <span>
     <a href="publicrecords/prhome.html">Public records</a>
     </span>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);