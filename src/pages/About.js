import React, { PureComponent } from "react";
import store from "../store";
import { subAction } from "../store/createAction";
export default class About extends PureComponent {
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
        <h1>About</h1>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={(e) => this.Minus(1)}>-1</button>
        <button onClick={(e) => this.Minus(5)}>-5</button>
      </div>
    );
  }
  Minus(num) {
    store.dispatch(subAction(num));
  }
}
