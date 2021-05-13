import request from '@/utils/request';


export function getProjectList(jsonObj) {
    return request.getWithParam('user/readProjectList', jsonObj);
}


export function getNodeList() {
    return request.get('user/getNodeList');
}

export function getUserList() {
    return request.get('user/getUserList');
}

export function createTransaction(jsonObj) {

    return request.post('/manage/spend', jsonObj);
}

export function getAllBlock() {

    return request.get('/manage/getAllBlock');
}

export function getOneProjectFund(jsonObj) {

    return request.getWithParam('/manage/getProjectFundFlow', jsonObj);
}

export function getProjectFundGraph(jsonObj) {

    return request.getWithParam('/manage/getProjectFundGraph', jsonObj);
}

export function getOneUserProjectFundGraph(jsonObj) {

    return request.getWithParam('/user/getOneUserProjectFundGraph', jsonObj);
}

export function getUserFundGraph(jsonObj) {

    return request.getWithParam('/manage/getUserFundGraph', jsonObj);
}


export function getUserContribution(json) {

    return request.getWithParam('/manage/getUserContribution', json);
}


export function getUserOwnContribution(json) {

    return request.getWithParam('/user/getUserContribution', json);
}



export function getUserOneProjectFund(json) {

    return request.getWithParam('/user/getUserOneProjectFund', json);
}

