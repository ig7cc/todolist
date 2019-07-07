import React,{Component} from 'react';
import Store from '../../todoStore/store';
import ActionCreator from '../../todoStore/actionCreator';

class List extends Component{
    //监听数据变化
    componentDidMount(){
        Store.subscribe(()=>{
            this.setState({});
        })
    }
    //显示未完成
    unfinished(str){
        ActionCreator.unfinished(str);
    }
    //显示已完成
    finished(str){
        ActionCreator.finished(str);
    }
    //显示全部
    all(str){
        ActionCreator.all(str);
    }
    //删除
    del(index){
        ActionCreator.delData(index);
    }
    //渲染事件列表
    renderList(data){
        console.log(data)
        return(
            <ul>
                {data.list.map((item,index)=>{
                    return(
                        <li key={index}
                            className={item.status?"green":"red"}
                            style={{display:item.show?"block":"none"}}
                        >
                            <span>{index+1}</span>
                            <span>{item.msg}</span>
                            {this.renderBtn(item.status,index)}
                            <button onClick={this.del.bind(this,index)}>删除</button>
                        </li>
                    )
                })}
                <li>
                    <span onClick={this.all.bind(this,"all")} className={data.sel==="all"?"selected":""}>全部</span>
                    <span onClick={this.finished.bind(this,"finished")} className={data.sel==="finished"?"selected":""}>已完成</span>
                    <span onClick={this.unfinished.bind(this,"unfinished")} className={data.sel==="unfinished"?"selected":""}>未完成</span>
                </li>
            </ul>
        )
    }
    //去完成
    accomplish(index){
        ActionCreator.changeStatus(index);
    }
    //已完成与去完成
    renderBtn(data,index){
        if(data){
            return (<span>已完成</span>)
        }else{ 
            return (<button onClick={this.accomplish.bind(this,index)}>去完成</button>)
        }
    }
    render(){
        console.log(Store)
        //获取全局状态值
        let {list,sel} = Store.getState();
        return(
            <div>
                {this.renderList({list,sel})}
            </div>
        )
    }
}

export default List;