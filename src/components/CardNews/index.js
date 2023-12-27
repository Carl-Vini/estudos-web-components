class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
        
    }
    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class','card')

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class','card-left')

        const autor = document.createElement('span');
        autor.textContent = "By " + (this.getAttribute('autor') || 'Anonymous');

        const linkNoticia = document.createElement('a');
        linkNoticia.textContent = this.getAttribute('title');
        linkNoticia.href = this.getAttribute('url') || "https://github.com/Carl-Vini?tab=repositories";

        const paragrafo = document.createElement('p');
        paragrafo.textContent = this.getAttribute('paragrafo');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkNoticia);
        cardLeft.appendChild(paragrafo);

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('imagem');
        newsImage.alt = "foto do darth Vader";
        const cardRight = document.createElement('div');
        cardRight.appendChild(newsImage);
        cardRight.setAttribute('class','card-right');
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles() {
        
    }
}

customElements.define('card-news',CardNews);