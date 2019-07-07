import Store from './store';
export default {
    //增加数据
    addData(params){
        let action = {
            type:"ADD_DATA",
            params:params
        }
        Store.dispatch(action);
    },
    //删除数据
    delData(params){
        let action = {
            type:'DEL_DATA',
            params:params
        }
        Store.dispatch(action);
    },
    //修改去完成的status 值
    changeStatus(params){
        let action = {
            type:"CHANGE_STATUS",
            params:params
        }
        Store.dispatch(action);
    },
    //显示全部
    all(params){
        let action = {
            type:"ALL",
            params:params
        }
        Store.dispatch(action);
    },
    //显示已完成
    finished(params){
        let action = {
            type:"FINISHED",
            params:params
        }
        Store.dispatch(action);
    },
    //显示未完成
    unfinished(params){
        let action = {
            type:"UNFINISHED",
            params:params
        }
        Store.dispatch(action);
    }
}