import React, { Component } from 'react';
import './App.css';
import TodoFooter from './components/todo-footer/todo-footer.component';
import TodoForm from './components/todo-form/todo-form.component';
import TodoList from './components/todo-list/todo-list.component';

class App extends Component {
  state = {
    todos: [],
    counter: 0,
  }
  
  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
      counter: this.state.counter + 1,
      
    });
  }

  deleteToDo = (id) => {
    this.setState({
     todos: this.state.todos.filter((todo) => todo.id !== id),
     counter: this.state.counter - 1,
    })
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-app">
        <TodoForm addTodo={this.addTodo}/>

        <TodoList todos={todos} onDelete={this.deleteToDo}/>

        <TodoFooter counter={this.state.counter} />
      </div>
    );
  }
}

export default App;