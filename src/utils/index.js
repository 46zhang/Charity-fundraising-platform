/**
 * @description 判断目标是否是未定义
 */
export function isUndef(v) {
    return v === undefined || v === null;
}

/**
 * @description 判断是否是纯对象，纯对象的概念就是用 new Object() 或者 {} 赋值的变量
 * @version 1.0.0
 */
export function isPlainObject(obj){
    return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * @description 将get请求参数序列化
 * @param obj
 */
export function getReqDataSequence(obj) {
    if (!isPlainObject(obj)) {
        return '';
    }

    let keys = Object.keys(obj);
    let result = '';

    for (let i = 0; i < keys.length; i++) {
        result += keys[i] + '=' + obj[keys[i]] + '&';
    }

    return result.substring(0, result.length - 1);
}

export function upload(url, data){
    return _Request.post(url, data, {
        headers:{'Content-Type':'multipart/form-data'}
    });
}
