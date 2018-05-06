import React from "react";
import { connect } from "react-redux";
import List from "./List";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from "../actions/todos";

class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();
    this.props.dispatch(
      handleAddTodo(this.input.value, () => {
        return (this.input.value = "");
      })
    );
  };

  removeItem = todo => {
    this.props.dispatch(handleDeleteTodo(todo));
  };

  toggleItem = todo => {
    this.props.dispatch(handleToggleTodo(todo));
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add todo"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Todos);
