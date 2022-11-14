import { TIMEOUT_SEC } from "../config";

const timeout = function(s) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Запрос занял много времени! Время ожидания больше ${s} секунды`))
        }, s * 1000)
    })
}

export async function getJSON(url) { 
    try {
        const fetchPro = fetch(url);
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)])   
        const data = await res.json(); 

        if(!res.ok) throw new Error(`${data.message} (${res.status})`);

        return data;
    } catch (error) {
        throw error;    
    }
}