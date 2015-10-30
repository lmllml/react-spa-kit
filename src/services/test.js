import * as request from './request';


export function get() {
    return request.get('https://cnodejs.org/api/v1/topics')
        .then(function (data) {
            console.log(data);
            return data
        });
}