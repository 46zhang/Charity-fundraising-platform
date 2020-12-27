import request from '@/utils/request'
import { getReqDataSequence } from '../utils';

/*
* jsonObj
* {
*   pageIndex:x,
*   pageSize:y
* }
*
* */
export function getActivityList(jsonObj) {
    return request.getWithParam('user/readProjectList', jsonObj)
}

/*
* jsonObj
* {
*   projectId:id
* }
*
* */
export function getActivityDetail(jsonObj) {
    return request({
        url: '/user/readList'+getReqDataSequence(jsonObj),
        method: 'get',
    })
}


export function createActivity(obj){
    const data={
        projectStartTime:obj.projectStartTime,
        projectFinishTime:obj.projectFinishTime,
        projectName:obj.projectName,
        projectExplain:obj.projectExplain,
        projectPhoto:obj.projectPhoto
    };
    return request.post('/user/launch',data);
}


export function updateActivity(obj) {
    const data={
        projectStartTime:obj.projectStartTime,
        projectFinishTime:obj.projectFinishTime,
        projectName:obj.projectName,
        projectExplain:obj.projectExplain,
        projectPhoto:obj.projectPhoto
    };
    return request.post('/user/launch',data);
}
