import state from './state';
export default (prevState=state,actions)=>{
    console.log(prevState,"---",actions);
    let newData = prevState;
    let {type,params} = actions;
    switch(type){
        case "ADD_DATA":
            if(params){
                // if(!localStorage.getItem('list')){
                //     localStorage.setItem('list',JSON.stringify([{show:true,status:false,msg:params}]))
                // }else{
                    newData.list.push({show:true,status:false,msg:params});
                    localStorage.setItem('list',JSON.stringify(newData.list));
                // }
            }else{
                alert("请输入待办事项");
            }
            break;
        case "DEL_DATA":
            newData.list.splice(params,1);
            localStorage.setItem('list',JSON.stringify(newData.list));
            break;
        case "CHANGE_STATUS":
            newData.list[params].status = true;
            localStorage.setItem('list',JSON.stringify(newData.list));
            break;
        case "ALL":
            for(var i=0,len = newData.list.length;i<len;i++){
                newData.list[i].show = true;
            }
            newData.sel = params;
            break;
        case "FINISHED":
            for(let k=0,len = newData.list.length;k<len;k++){
                newData.list[k].show = newData.list[k].status;
            }
            newData.sel = params;
            break;
        case "UNFINISHED":
            for(let i=0,len = newData.list.length;i<len;i++){
                newData.list[i].show = !newData.list[i].status;
            }
            newData.sel = params;
            break;
        default:
            break;    
    }
    return newData;
}