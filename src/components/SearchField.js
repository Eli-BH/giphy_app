import React from 'react' 
import './GifSearch.css';

const SearchField =  ({value, onChange, onSearch}) => {
    return (
        <div className ="search">
            <input value={value} onChange={onChange}/>
            <button onClick= {onSearch}>Search</button>
        </div>
    );
};
export default SearchField;
