import React, { Component } from 'react';
import axios from 'axios';
import './GifCard.css'

class GifCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            gifUrl: []
        }
    }

    componentDidMount () {
        //if(this.trending)
        const API_KEY = process.env.REACT_APP_API_KEY;
        axios
            .get(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10&rating=G`)
            .then((response) => {
                const data = response.data; 
                const newGifs = [];
                for(let i = 0; i < data.data.length; i++){
                    newGifs.push(data.data[i].images.fixed_width.url)
                };
    
                this.setState({gifUrl: newGifs})

            }).catch((err) => console.log(err)) 
            
    }


    render() {
        const items = []; 
        for(let i = 0; i < this.state.gifUrl.length; i++){
            items.push(
                <div>
                    <img src={this.state.gifUrl[i]} alt="gif" className="gif"/>
                </div>)
        }
        
        return  (
            
                
            <div>
                <h1 id="trending">Trending Gifs</h1>
                <div className="GifCard">
                    {items}
                    {console.log(this.state.search + 'gc')}
                </div>
            </div>
            );
    }

    
}

export default GifCard
