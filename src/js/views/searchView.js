class SearchView {
    parentElement = document.querySelector('.search');
    inputElement = this.parentElement.querySelector('.search_Field'); 

    getQuery() {
        const query = this.inputElement.value;
        this.clearInput();
        return query;
    };

    clearInput() {
        this.inputElement.value = '';
    }

    addHandlerSearch(handler) {
        this.parentElement.addEventListener('submit', (e) => {
            e.preventDefault();
            handler();
        })
    }
}

export default new SearchView()