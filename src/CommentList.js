import React from 'react';
import Comment from './Comment';
import axios from 'axios';

export default class CommentList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    axios.get(`https://demo9371079.mockable.io/comments`)
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      });
  }

  render() {
    return (
      <div className="CommentList">
          {this.state.comments.map(comment =>
            <Comment key={comment.id} author={comment.author} text={comment.text} />
          )}
      </div>
    );
  }
}
