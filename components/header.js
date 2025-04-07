class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var about = document.URL.includes("index.html");
    var projects = document.URL.includes("projects.html");
    var articles = document.URL.includes("articles.html");

    var inProjects = document.URL.includes("/projects/");
    var inArticles = document.URL.includes("/articles/");

    this.innerHTML = `
      <header>
        <div class="column-section">
          <p class="title-text">Luke Lyall</p>
          <p class="medium-text">Analyst/Programmer</p>
        </div>
          <nav> 
            <a ${inProjects || inArticles ? 'href="../projects.html"' : 'href="./projects.html"'} ${projects ? 'class="active-tab"' : ''}>projects</a>
            <a ${inProjects || inArticles ? 'href="../articles.html"' : 'href="./articles.html"'} ${articles ? 'class="active-tab"' : ''}>articles</a>
            <a ${inProjects || inArticles ? 'href="../index.html"' : 'href="./index.html"'} ${about ? 'class="active-tab"' : ''}>about</a>
          </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);