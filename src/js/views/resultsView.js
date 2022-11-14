import View from "./View";

class ResultsView extends View {
    parentElement = document.querySelector('.results');
    errorMessage = 'Рецепы не найден';
    message = '';

    generateMarkup() {
        return this.data.map(this._generateMarkupPreview).join('');
    }

    _generateMarkupPreview(result) {
        return `<li>
                <a href="#${result.id}">${result.title}</a>
            </li>`
        }
    }

export default new ResultsView();