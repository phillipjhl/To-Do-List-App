import 'isomorphic-fetch';

function makeFetch(url, info) {
    return fetch(url, info);
}