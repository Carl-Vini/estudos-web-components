class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        // criando uma tag h1
        const shadow = this.attachShadow({mode:'open'});
        const componentRoot = document.createElement('h1');
        
        componentRoot.textContent = this.getAttribute("title-text");
        console.log(componentRoot)

        // estilizando a tag criada, lembra styled components
        const style = document.createElement('style');
        style.textContent = ` 
            h1 {
                color: red; 
            }
        `

        // enviando para o shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(componentRoot);
        
    }
}

customElements.define('titulo-dinamico', TituloDinamico);