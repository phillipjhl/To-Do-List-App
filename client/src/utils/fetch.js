import 'isomorphic-fetch';

function makeFetch(url, info) {
    return fetch(url, info);
}

function json(url, method = 'GET', payload = {}) {
    let data = {
        method,
        body: JSON.stringify(payload),
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    };

    // GET request do not conatin a body
    if (method === 'GET') {
        delete data.body;
    }
}