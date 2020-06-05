import React, {Component} from 'react';
import SearchField from './components/SearchField'
import axios from 'axios';


class GifSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            searchInput: '',
            gifUrl: ''
        }
    }
 
    handleInput = (event) => {
        this.setState({searchInput: event.target.value});
    };

    handleSearch = () => {
        const searchInput = this.state.searchInput;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=9nyA05jjiNMrTb4CsnPDkfKArV9U5Gap&q=${searchInput}&limit=15&offset=0&rating=G&lang=en`;
        axios
            .get(url)
            .then((response) => {
                const data = response.data; 
                const newGifs = [];
                for(let i = 0; i < data.data.length; i++){
                    newGifs.push(data.data[i].images.fixed_width.url)
                };
    
                this.setState({gifUrl: newGifs})

            }).catch((err) => console.log(err))         
    }
    
    render(){
    const items = [];
    const passItems = []; 
    for(let i = 0; i < this.state.gifUrl.length; i++){
        items.push(
            <div className="gif-cards">
                <img src={this.state.gifUrl[i]} alt="gif"/>
            </div>);
        passItems.push(this.state.gifUrl[i]
        )
    }

    return (

        <div>
                <SearchField 
                value={this.state.searchInput}
                onChange={this.handleInput}
                onSearch = {this.handleSearch}
                />
            <h2>{this.state.term}</h2>
            {items}
        </div>
    )
    }



}

export default GifSearch; 