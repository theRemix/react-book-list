import React, { Component } from 'react';

export default class NewBookForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : '',
      author : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    // function passed down from parent container
    this.props.addBook({ title : this.state.title, author : this.state.author });

    // clear the form
    this.setState({ author : '', title : '' });
  }

  handleChangeTitle(event){
    this.setState({
      title : event.target.value
    });
  }

  handleChangeAuthor(event){
    this.setState({
      author : event.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} />
        </div>
        <div>
          <input type="text" placeholder="Author" value={this.state.author} onChange={this.handleChangeAuthor} />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    );
  }
}
