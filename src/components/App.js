import React from "react";
import { connect } from "react-redux";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import {
  handleReceiveData
} from "../actions/shared";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveData());
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        <h1>REACT-REDUX APP</h1>
        {loading ? (
          <p>Loading Data</p>
        ) : (
          <div>
            <ConnectedTodos />
            <ConnectedGoals />
          </div>
        )}
      </div>
    );
  }
}

export default connect(state => {
  return { loading: state.loading };
})(App);
