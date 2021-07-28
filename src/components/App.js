import './App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <h1>BookStore Project</h1>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
