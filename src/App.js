import React, {Component} from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import Todos from "./Components/Todos/Todos";

class App extends Component {
  state = {
    todos: [
      {id:1, task: 'Go to hell'},
      {id:2, task: 'Return from hell'},
    ]
  }
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
      // if key and id have the same name we can just write the key.
    })
  }
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return(
      <div className="container todo-app">
      <h1 className="center blue-text">All Tododos</h1>
        <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
