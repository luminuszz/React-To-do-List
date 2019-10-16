import React, { Component } from 'react';
import './index.css';




class TableTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { }

    this.delete = this.delete.bind(this)
  }

  delete(key){
    this.props.delete(key);

  }
  render() {
    return (
      <div>
        <div className="containerTable">
          <table className="tableStyle">
            <thead>
              <tr>
                <th>key</th>
                <th>Descrição</th>
                <th>Numero</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {this.props.lista.map((item,index) => {

                return (
                  <tr  key={item.key}>
                    <td >{item.key}</td>
                    <td>{item.text}</td>
                    <td>{index}</td>
                    <td ><button onClick={()=> this.delete(item.key) }>Excluir</button></td>
                  </tr>
                )

              })}


            </tbody>

          </table>

        </div>

      </div>
    )
  }

} export default TableTodo