import React, { Component } from "react";
import TableTodo from '../tableTodo'
import "./index.css";


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefa: '',
      itens: []
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.logTodo = this.logTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  submitTodo(e) {
    let state = this.state;
    if (this._tarefaInput.value !== "") {
      let newTodo = {
        text: this._tarefaInput.value,
        key: Date.now()
      };
      this.setState({ itens: [...state.itens, newTodo] });
      this.setState({ tarefa: '' })
    }
    e.preventDefault()
  }

  logTodo(e) {
    let state = this.state
    let testeLength = state.itens.length
    testeLength <= 0 ? alert("Escreva algo") : console.log('ok');
    console.log(this.state.itens);
    e.preventDefault()
  }

  deleteTodo(key){
    console.log("Deletar Todo " + key);
    let state = this.state
    let filtro = state.itens.filter((item)=>{
      return( item.key !== key);
    })
    this.setState({itens:filtro});
  }

  render() {
    return (
      <div className="div">
        <h1>TodoList</h1>
        <div className="container">
          <form onSubmit={this.submitTodo}>
            <div className="divInput">
              <label htmlFor="inputTodo">Escreva algo aqui..</label>
              <input
                type="text"
                id="inputTodo"
                value={this.state.tarefa}
                onChange={e => {
                  this.setState({ tarefa: e.target.value });
                }}
                ref={e => (this._tarefaInput = e)}
              ></input>
            </div>
            <div className="formButton">
              <button type="submit">Adcionar</button>
              <button onClick={this.logTodo}>Log</button>
            </div>
          </form>

        </div>

        <TableTodo lista ={this.state.itens} delete={this.deleteTodo}/>
      </div>
    );
  }
}
export default TodoList;
