import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js'; 
import resultsView from './views/resultsView.js';


if(module.hot) {
    module.hot.accept();
}

async function controlRecipes() {
    try {
        const id = window.location.hash.slice(1);
        if(!id) return

        recipeView.renderSpinner();
        
        // 1 load
        await model.loadTestData(id);

        // 2 render
        recipeView.render(model.state.recipe)
        // const recipeView = new recipeView(model.state.recipe); 

        console.log(model.state.recipe);
    } catch (error) {
        recipeView.renderError(`${error} ***`)
    }
};

async function controlSearchResults() {
    try {
        resultsView.renderSpinner();
        const query = searchView.getQuery();
        if(!query) return;

        await model.loadSearchReults(query);
        resultsView.render(model.state.search.results)
        console.log(model.state.search.results);
    } catch (error) {
        console.log(error);
    }
}

const init = function() {
    console.log("init");

    const arrayValues = [{id: 10, name: 'someName1'}, {id: 10, name: 'someName2'}, {id: 11, name:'someName2'}, {id: 12, name: 'someName4'}];


    // unique - массив уникальных значений
    // duplicates - массив дубликатов 1 значение на лжин дубликат
    // const unique = []

    // const duplicates = arrayValues.filter(o => {

    //     if(unique.find(i => i.id === o.id && i.name === o.name)) {
    //         return true
    //     }

    //     unique.push(o)
    //     return false;
    // })

    // checkDuplicateInObject => return boolean - есть или нету дубликатов?
    // function checkDuplicateInObject(propertyName, inputArray) {
    //     var seenDuplicate = false,
    //     testObject = {};
      
    //     inputArray.map(function(item) {
    //     var itemPropertyName = item[propertyName];    
    //     if (itemPropertyName in testObject) {
    //     testObject[itemPropertyName].duplicate = true;
    //     item.duplicate = true;
    //     seenDuplicate = true;
    //    }
    //    else {
    //      testObject[itemPropertyName] = item;
    //      delete item.duplicate;
    //    }
    //   });
      
    //    return seenDuplicate;
    //   }
    // const duplicates = checkDuplicateInObject('containerId', arrayValues)
    // console.log("unique__", unique);
    // console.log("duplicates__", duplicates);

    const lookup = arrayValues.reduce((a, e) => {
      a[e.name] = ++a[e.name] || 0;
      return a;
    }, {});
    
    const duplicates = arrayValues.filter(e => lookup[e.name])
    console.log("duplicates", duplicates);

    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
};

init();
