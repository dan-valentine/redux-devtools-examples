import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {addTodos, deleteTodos, getTodos} from './ducks/reducer'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newTodo:''
    };

  }

  componentDidMount(){
    this.props.getTodos();
  }
  onChange = e =>{
    this.setState({
      newTodo: e.target.value
    })
  }
  render() {

    const todos = this.props.todos.map((todo, i) => (
      <div key={i}>{todo} <button onClick={_=>this.props.deleteTodos(i)}>Delete</button></div>
    ))

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <input onChange={this.onChange}/>
          <button onClick={_=>this.props.addTodos(this.state.newTodo)}>Add Todo</button>
        </div>
          {todos}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {getTodos, addTodos, deleteTodos})(App);
