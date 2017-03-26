import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList';
import BookFilterInput from '../../components/BookFilterInput';
import NewBookForm from '..//NewBookForm';
import {addBookToFakeXHR, getBooksFromFakeXHR} from '../../lib/books.db';
import { addBook, loadBooks, updateSearchFilter } from '../../actions';
import './styles.css';

// a react component
class App extends Component {
  constructor() {
    // give props to your parent
    super();
    // do your shit after parent is done doing their shit

    this.title = 'Book List App';

    // set the initial state of THIS COMPONENT
    // in the constructor
    // this.state = {
    //   books : [],
    //   filter : ''
    // };

    this.addBook = this.addBook.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  // life cycle hook
  // before rendering
  componentWillMount(){
    getBooksFromFakeXHR()
      .then( books => {
        this.props.loadBooks( books );
      });
  }


  // goal
  addBook(book){
    addBookToFakeXHR(book)
      .then( books => {
        console.log(books);
        this.props.loadBooks( books );
      });
  }

  setFilter( event ) {
    const filter = event.target.value;
    this.props.updateSearchFilter(filter);
  }

  render () {
    return (
      <div>
        <BookListAppTitle title={this.title} />
        <BookFilterInput setFilter={this.setFilter} />
        <BookList books={this.props.books} searchFilter={this.props.filter} />
        <NewBookForm addBook={this.addBook} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
    searchFilter: state.searchFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadBooks: books => {
      dispatch(loadBooks(books))
    },
    addBook: book => {
      dispatch(addBook(book))
    },
    updateSearchFilter: searchFilter => {
      dispatch(updateSearchFilter(searchFilter))
    },
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
