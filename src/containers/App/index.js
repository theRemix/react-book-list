import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList';
import BookFilterInput from '../../components/BookFilterInput';
import NewBookForm from '..//NewBookForm';
import {addBookToFakeXHR, getBooksFromFakeXHR} from '../../lib/books.db';
import './styles.css';

// a react component
export default class App extends Component {
  constructor() {
    // give props to your parent
    super();
    // do your shit after parent is done doing their shit

    this.title = 'Book List App';

    // set the initial state of THIS COMPONENT
    // in the constructor
    this.state = {
      books : [],
      filter : ''
    };

    this.addBook = this.addBook.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  // life cycle hook
  // before rendering
  componentWillMount(){
    getBooksFromFakeXHR()
      .then( books => {
        this.setState({ books });
      });
  }


  // goal
  addBook(book){
    addBookToFakeXHR(book)
      .then( books => {
        this.setState({ books });
      });
  }

  setFilter( event ) {
    const filter = event.target.value;
    this.setState({ filter });
  }

  render () {
    return (
      <div>
        <BookListAppTitle title={this.title} />
        <BookFilterInput setFilter={this.setFilter} />
        <BookList books={this.state.books} searchFilter={this.state.filter} />
        <NewBookForm addBook={this.addBook} />
      </div>
    );
  }
};
