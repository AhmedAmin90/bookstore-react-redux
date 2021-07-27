/* eslint-disable */

import React , {useState}from 'react';
import {useDispatch , useSelector} from 'react-redux';
import * as actions from '../actions/index'
import './BooksForm.css';

const BooksForm = () => {
    const allBooks = useSelector(state=> state.allBooks);
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    let lastId = allBooks.length;
  
    const [book, setBook] = useState({
        id: ++lastId,
        title: '',
        category: categories[0],
      });
    
    const dispatch = useDispatch();
    const handleChange = ({target})=>{
        setBook((pre) => ({
            ...pre,
            [target.name]: target.value,
          }));
    }

    const handleClick = (e)=>{
        e.preventDefault();
        if (book.title.trim() === '') { alert("Please Add The Book Title !")} 
        else {
            dispatch(actions.CREATE_BOOK({id: book.id, title:book.title.trim() , category: book.category}));
            let nexId = ++book.id;
            setBook({
                id: nexId,
                title: '',
                category: categories[0],
            });
        }
      
    }
    
    return (
      <div className="BooksForm">
          <form onSubmit={handleClick}>
                <label htmlFor="title">Add The Book Title</label>
                <input type="text" value={book.title} placeholder="Book Title" name="title" onChange={handleChange}></input>
                <label htmlFor="select">Category:</label>
                <select name='category' value={book.category} onChange={handleChange}>
                    <option defaultValue disabled>Select Category</option>
                        {categories.map(cat=> 
                        <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                <button>Add New Book</button>
        </form>
      </div>
    )
}

export default BooksForm;
