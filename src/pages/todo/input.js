import React,{Component} from 'react';
import ActionCreator from '../../todoStore/actionCreator';
class Input extends Component{
    add = ()=>{
        // console.log(this)
        let msg = this.refs.input.value;
        ActionCreator.addData(msg);
        this.refs.input.value = '';
    }
    render(){
        // console.log(this)
        return (
            <div className='add'>
              <input type='text' ref='input'/>
              <button onClick={this.add}>添加</button>  
            </div>
        )
    }
}

export default Input;