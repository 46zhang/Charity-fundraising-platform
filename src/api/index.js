import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export  function uploadFile(file){
    return request.upload('/user/uploadPhoto',file);
}
