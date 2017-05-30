import React from 'react';
import axios from 'axios';

export default class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {author: '', text: ''};

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.setState({author: '', text: ''});
  }
  render() {
    return (
      <div className="commentForm">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Some text..." value={this.state.text} onChange={this.handleTextChange} />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}
