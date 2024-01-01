// js script to duplicate my Header and Footer

class duplicateHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="page-container">
          <div class="bloc bgc-white l-bloc" id="bloc-0">
            <div class="container bloc-sm">
              <div class="navbar row">
                <div class="navbar-header">
                  <a class="navbar-brand" href="index.html">
                    <img
                      src="img/darkerlogo.webp"
                      alt="GoMike web developer logo"
                      height="40"
                    />
                  </a>
                  <button
                    id="nav-toggle"
                    type="button"
                    class="ui-navbar-toggle navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-1"
                  >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>
                <div class="collapse navbar-collapse navbar-1 special-dropdown-nav">
                  <nav>
                    <ul class="site-navigation nav navbar-nav">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="page2.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

class duplicateFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>   
      <div class="bloc bgc-dark-slate-blue d-bloc" id="bloc-8">
        <div class="container bloc-sm">
          <div class="row">
            <div class="col-sm-12">
              <p class="text-center white">
                GoMike Designs - Web designer living and loving Atlanta.<br />
              </p>
              <div class="row row-no-gutters social">
                <div class="col-sm-3">
                  <div class="text-center">
                    <a class="social" href="https://twitter.com/YourTwitterUsername" aria-label="Twitter" title="Visit our Twitter page">
    <span class="fa fa-twitter icon-md"></span>
    
</a>

                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="text-center">
                    <a class="social" href="https://www.facebook.com" aria-label="Facebook" title="Visit our Facebook Page">
  <span class="fa fa-facebook icon-md" aria-hidden="true"></span>
  
</a>


                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="text-center">
                    <a class="social" href="https://dribbble.com" aria-label="Dribbble" title="Visit our Dribble Page">
    <span class="fa fa-dribbble icon-md" aria-hidden="true"></span>
    
</a>

                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="text-center">
                  <a class="social" href="https://www.instagram.com" aria-label="Instagram" title="Visit our Instagram Page">
    <span class="fa fa-instagram icon-md" aria-hidden="true"></span>
    
</a>
   </footer>        
    `;
  }
}

customElements.define("duplicate-header", duplicateHeader);
customElements.define("duplicate-footer", duplicateFooter);
