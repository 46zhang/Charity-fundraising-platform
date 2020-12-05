import axios from 'axios';
import { getResultResData } from './format';
import { getToken } from './tokenUtils';
import { isUndef } from './index';

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
axios.interceptors.request.use(
    config => {
        if (getToken('Authorization')) {
            config.headers.Authorization = getToken();
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
            }
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

export default service;
