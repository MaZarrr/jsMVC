import { API_URL } from "../config";
import { getJSON } from "./helpers";

export const state = {
    recipe: {},
    search: {
        query: '',
        results: []
    }
}


export const loadTestData = async function (id) {
    try {
        const data = await getJSON(`${API_URL}/get?rId=${id}`)
        state.recipe = data.recipe;
        console.log("loadTestData__", state);
    } catch (error) {
        console.error(`${error} ****`);
        throw error;
    }
};

export const loadSearchReults = async function(query) {
    try {
        state.search.query = query;

        const data = await getJSON(`${API_URL}/search?q=${query}`);
        console.log("loadSearchReults___data", data);

        state.search.results = data.recipes.map(item => {
            return {
                id: item.recipe_id,
                title: item.title,
                publisher: item.publisher, 
                image: item.image_url
            }
        });
        console.log("state_search", state.search);
    } catch (error) {
        console.error(`${error} ****`);
        throw error;
    }
};