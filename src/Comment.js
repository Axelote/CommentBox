import React from 'react';

export default class Comment extends React.Component {

  render() {
    return (
      <div className="comment">
        <h4 className="commentAuthor">{this.props.author}</h4>
        <p className="commentText">{this.props.text}</p>
      </div>
    );
  }
}
