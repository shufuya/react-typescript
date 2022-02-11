import React, { PureComponent } from "react";
import store from "../store";
import { addAction } from "../store/createAction";
export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={(e) => this.addNumber(1)}>+1</button>
        <button onClick={(e) => this.addNumber(5)}>+5</button>
      </div>
    );
  }
  addNumber(num) {
    store.dispatch(addAction(num));
  }
}
