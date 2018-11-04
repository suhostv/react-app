import React, { Component } from 'react';
import TodoItem from './todoItem'

export default class Todos extends Component {
  
  render() {
    let todoItems;
    if (this.props.todos) {
        todoItems = this.props.todos.map(todo => {
            //console.log(pr);
            return (
              <TodoItem todo = {todo}></TodoItem>
            );
        });
    }

    return (
      <div className="Todos">
      <h3>Latest Todos</h3>
        {todoItems}
      </div>
    );
  }
}

//export default Todos;