import React, { Component } from 'react';
import axios from 'axios';

export class GifCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            gifUrl: []
        }
    }

    componentDidMount () {
        axios
            .get('http://api.giphy.com/v1/gifs/trending?api_key=9nyA05jjiNMrTb4CsnPDkfKArV9U5Gap&limit=10&rating=G')
            .then((response) => {
                const data = response.data; 
                const newGifs = [];
                for(let i = 0; i < data.data.length; i++){
                    newGifs.push(data.data[i].images.original.url)
                };

                console.log(newGifs);
    
                this.setState({gifUrl: newGifs})

            }).catch((err) => console.log(err))
    }


    render() {
        const items = []; 
        for(let i = 0; i < this.state.gifUrl.length; i++){
            items.push(
                <div>
                    <img src={this.state.gifUrl[i]}/>
                </div>)
        }

        return  (
            <div>
                {items}
            </div>
            );
    }

    
}

export default GifCard
