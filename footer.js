class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      footer{
        background-color:  red;
        color:  yellow;
        position:fixed;
        bottom:0;
        width:100%;
        height:20px;   /* Height of the footer */


    }
    </style>

      <footer>
      <center>
      This Site Was Made by Fox Development.
      </center>      
      </footer>
      

      `;
    }
  }
  
  customElements.define('footer-component', Footer);