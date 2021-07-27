/* eslint-disable */
import React from 'react'
import {useSelector} from 'react-redux';
import Book from '../components/Book';

function BooksList() {
    const allBooks = useSelector(state=> state.allBooks);
    const books = allBooks.map(book=> 
        <Book key={book.id} book={{id: book.id , title: book.title, category: book.category }} />
        );
        
    return (
        <div>
            <table>
            <thead>
                <tr>
                  <th>Book ID</th>
                  <th>Title</th>
                  <th>Category</th>
                </tr>
            </thead>
            <tbody>
           {books}
            </tbody>
            </table>
        </div>
    )
}

export default BooksList
