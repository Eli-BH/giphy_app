import React, { Component } from 'react';
import axios from 'axios';


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
        axios
            .get('http://api.giphy.com/v1/gifs/trending?api_key=9nyA05jjiNMrTb4CsnPDkfKArV9U5Gap&limit=10&rating=G')
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
                    <img src={this.state.gifUrl[i]} alt="gif"/>
                </div>)
        }
        
        return  (
            
                
            <div>
            {items}
            {console.log(this.state.search + 'gc')}
            </div>
            );
    }

    
}

export default GifCard
