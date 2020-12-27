import axios from 'axios';
import { getResultResData } from './format';
import { getToken } from './tokenUtils';
import { getReqDataSequence, isUndef } from './index';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    baseURL: '/api/fundraising',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 添加请求拦截器，在请求头中加token
service.interceptors.request.use(
    config => {
        let token = getToken('Authorization');
        //console.log(token);
        if (token) {
            config.headers.Authorization = token;
            //console.log(token);
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    });


service.interceptors.response.use(
    response => {
        return getResultResData(response.data);
    },
    error => {
        if (isUndef(error.response)) {
            return {
                isSuccess: false,
                data: {},
                msg: '请求发不出去，请检查您的网络。如果您的网络正常，请联系服务器管理人员'
            };
        }
        let status = error.response.status;

        switch (status) {
            case 404: {
                return {
                    isSuccess: false,
                    data: error,
                    msg: '服务器请求地址出错，请联系服务器管理人员'
                };
            }

            case 500: {
                return {
                    isSuccess: false,
                    data: error,
                    msg: '服务器出现异常，请联系服务器管理人员'
                };
            }

            default: {
                return {
                    isSuccess: false,
                    data: error,
                    msg: '请求发生错误，请重新刷新页面'
                };
            }
        }
    }
);

class Request {

    post(url, data) {
        return service.post(url, data);
    }

    upload(url, data) {
        return service.post(url, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    }
    get(url) {
        return service.get(url);
    }
    getWithParam(url,data){
        url+="?" + getReqDataSequence(data);
        return service.get(url);
    }
};

export default new Request();
