import React,{Component} from 'react';
import './index.css';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
      tarefa:''
    }
   
  }
  render(){
    return(
      <div className="container">
       <form>
         <div className="divInput">
           <label htmlFor="inputTodo">Escreva algo aqui..</label>
           <input type="text" id="inputTodo" value={this.state.tarefa} onChange={(e)=>{this.setState({tarefa:e.target.value})}}></input>
         </div>
         <div className="formButton">
           <button type="submit">Guardar</button>


         </div>
       </form>
      </div>
    );
  }
}
export default TodoList