import qs from 'query-string';


const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};


export function get(url, params, headers = {}) {
    if (params) {
        url += '?' + qs.stringify(params);
    }

    return fetch(url, {
        headers: {
            ...headers
        }
    })
        .then(res=>res.json());
}


export function post(url, body, headers = {}) {
    let fetchOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            ...defaultHeaders,
            ...headers
        }
    };

    return fetch(url, fetchOptions)
        .then(res=>res.json());
}



