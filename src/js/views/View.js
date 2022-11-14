export default class View {
    data;
    render(data) {
        console.log("data___", data);
        if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

        this.data = data;
        const markup = this.generateMarkup();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    clear() {
         this.parentElement.innerHTML = '';
    };

    
    renderError(message = this.errorMessage) {
        const markup = `
            <div class="error">${message}</div>
        `;
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', markup)
    };

    renderSpinner = function() {
        const markup = `
            <div> 
                <h1>Загрузка...</h1>
            </div>
        `;
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', markup)
    };
};