import React, { PureComponent } from "react";
import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      commentList: [],
    };
  }

  render() {
    return (
      <div style={{ width: "500px", padding: "10px" }}>
        {this.state.commentList.map((item, index) => {
          return <CommentItem key={item.id} comment={item} removeItem={(e) => this.removeItem(index)} />;
        })}
        <CommentInput submitComment={this.submitComment.bind(this)}></CommentInput>
        {/*<CommentInput submitComment={(e) => this.submitComment(e)}></CommentInput>*/}
      </div>
    );
  }
  submitComment(e) {
    console.log(e);
    this.setState({
      commentList: [...this.state.commentList, e],
    });
  }
  removeItem(index) {
    console.log(index);
    let newCommentList = [...this.state.commentList];
    newCommentList.splice(index, 1);
    this.setState({
      commentList: newCommentList,
    });
  }
}
