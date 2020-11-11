import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

async function getRequest(url, params={}) {
    try {
        let result =  await axios.get(BASE_URL + url, {params});
        return result.data;
    }
    catch (e) {
        return e;
    }

}

export {
    getRequest
};