import React, { Component } from 'react';
import Book from '../../components/Book';

export default class BookList extends Component {

  // constructor(props){
  //   super(props);

  // }

  // life cycle hook
  // done rendering
  // componentDidMount(){
  //   console.log('mounted');
  // }

  render() {
    return (
      <ul>
        {
          this.props.books
            .filter( ({title, author}) =>
              title.toLowerCase().indexOf(this.props.searchFilter.toLowerCase()) >= 0 ||
              author.toLowerCase().indexOf(this.props.searchFilter.toLowerCase()) >= 0
            )
            .map( ( { _id, title, author } ) =>
            <Book
              key={_id}
              title={title}
              author={author}
            />
          )
        }
      </ul>
    );
  }
}

