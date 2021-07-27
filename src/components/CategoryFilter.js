import React , {useState}from 'react'

function CategoryFilter({handleFilter}) {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const [category , setCategory ] = useState({
        category: 'All'
    });
    const handleChange = ({target})=>{
        setCategory((pre) => ({
            ...pre,
            [target.name]: target.value,
          }));
          handleFilter(target.value);
    }
    return (
        <div>
            <select onChange={handleChange} name="category">
                <option>All</option>
                {categories.map(cat=>
                <option key={cat} value={cat} >{cat}</option>)}
            </select>
        </div>
    )
}

export default CategoryFilter
