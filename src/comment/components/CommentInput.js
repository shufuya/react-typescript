import React, { PureComponent } from "react";
import { Input, Button } from "antd";
import moment from "moment";

const { TextArea } = Input;

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  render() {
    return (
      <div>
        <TextArea rows={4} cols={50} value={this.state.content} onChange={(e) => this.handleChange(e)} />
        <Button type="primary" onClick={(e) => this.addComment()}>
          添加文本
        </Button>
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      content: e.target.value,
    });
  }
  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://img1.baidu.com/it/u=3647953605,126474159&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
      nickname: "coderChen",
      datetime: moment(),
      content: this.state.content,
    };
    this.props.submitComment(commentInfo);
    this.setState({
      content: "",
    });
  }
}
