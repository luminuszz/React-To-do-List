import React, { Component } from 'react';
import './index.css';




class TableTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
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
              </tr>
            </thead>
            <tbody>
              {this.props.lista.map((item,index) => {

                return (
                  <tr key={item.key}>
                    <td >{item.key}</td>
                    <td>{item.text}</td>
                    <td>{index}</td>
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