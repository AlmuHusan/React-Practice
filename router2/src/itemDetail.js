import React from 'react';
import { render } from 'react-dom';

import {Link} from 'react-router-dom';

class  itemDetail extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      item:undefined,
      loaded:undefined,
    } ;
  }

  fetchItems = async () =>{
    const data =await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`,{
        headers:{
            Authorization: '9d5b6ba6e3b17cd790ba96327f3e8dcb'
        }
    });

    const item=await data.json();
    this.setState({item:item.data, loaded:true})
    console.log(this.state.item);
    }

    componentDidMount(){
        this.fetchItems();
        //console.log(this.props.match.params.id);
    }

  
   

render(){
    
  return (
    <div>
      {this.state.loaded ? 
      <div>
          <h1>Item: {this.state.item.item.name}</h1>
          <img alt="" src={this.state.item.item.images.background}></img>
      </div>
      :<h1/>}
    </div>
  );
  }
}
export default itemDetail;