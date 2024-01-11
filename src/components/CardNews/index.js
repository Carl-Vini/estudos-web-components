class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())

    }
    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card')

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card-left')

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
        newsImage.src = this.getAttribute('imagem') || "data:image/jpeg;base64,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";
        newsImage.alt = "foto do darth Vader";
        const cardRight = document.createElement('div');
        cardRight.appendChild(newsImage);
        cardRight.setAttribute('class', 'card-right');

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles() {
        const styles = document.createElement('style')

        styles.textContent = `
        .card {
            width: 720px;
            display: flex;
            margin: auto;
            margin-top: 30px;
            -webkit-box-shadow: 3px 3px 22px 4px rgba(230, 23, 74, 1);
            -moz-box-shadow: 3px 3px 22px 4px rgba(230, 23, 74, 1);
            box-shadow: 3px 3px 22px 4px rgba(230, 23, 74, 1);
            justify-content: space-between;
        }
        
        .card-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }

        a {
            text-decoration: none;
            color: black;
            font-size: 25px;
            font-weight: 700;
        }
        
        .card-left>span {
            font-weight: 400;
        }
        
        .card-left>h1 {
            margin-top: 10px;
            font-size: 25px;
        }
        
        .card-left>p {
            color: gray;
        }

        img {
            width: 200px;
        }
         `

        return styles
    }
}

customElements.define('card-news', CardNews);