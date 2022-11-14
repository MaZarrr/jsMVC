import View from "./View.js";

class RecipeView extends View {
    parentElement = document.querySelector('.container_Main');
    errorMessage = 'Рецеп не найден';
    message = '';
    
    addHandlerRender(handler) {
        ['load', 'hashchange'].forEach(eventType => window.addEventListener(eventType, handler));
    };

    generateMarkup() {
        return `
        <figure class="container"> 
            <h1> ${this.data.title} </h1>
            <img src=${this.data.image_url} />
        </figure>
        `;
    }
}

export default new RecipeView();