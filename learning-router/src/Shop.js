import React from 'react';
import { render } from 'react-dom';

import {Link} from 'react-router-dom';

class  Shop extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      loaded: undefined ,
      items:undefined,
    } ;
  }


    componentDidMount(){
        this.fetchItems();
    }

    fetchItems = async () =>{
      const data =await fetch('https://fortnite-api.theapinetwork.com/upcoming/get',{
          headers:{
              Authorization: '9d5b6ba6e3b17cd790ba96327f3e8dcb'
          }
      });
      const item=await data.json();
      const dat=item.data.slice(0,5);
      this.setState(
        {items:dat.map(item=>(
          <h1 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
          </h1>)),
        loaded:true});
    
     
    };

   

render(){
  return (
    <div>
      <h1>Shop</h1>
      {
       this.state.loaded ?
       this.state.items:<h1/>
      }
    </div>
  );
  }
}
export default Shop;
