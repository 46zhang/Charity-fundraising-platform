import request from '@/utils/request'


export function getProjectList(jsonObj) {
    return request.getWithParam('user/readProjectList', jsonObj)
}


export function getNodeList() {
    return request.get('user/getNodeList')
}

export function getUserList() {
    return request.get('user/getUserList')
}

export function createTransaction(jsonObj) {

    return request.post('/manage/spend',jsonObj)
}
