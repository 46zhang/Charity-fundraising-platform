/**
 * @description 处理请求返回值的数据，这里是请求成功的时候的返回值
 * @param res
 */
function getSuccessResData(res) {
    return {
        isSuccess: true,
        data: res.data ? res.data : {},
        msg: res.message ? res.message : ''
    }
}

function getFailResData(res) {
    return {
        isSuccess: false,
        data: res.data ? res.data : {},
        msg: res.message ? res.message : ''
    }
}

export function getResultResData(res){
    if (res.code == 100) {
        return getSuccessResData(res);
    }
    return getFailResData(res);
}
