import React ,{useState,useEffect} from 'react';
import { render } from 'react-dom';

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          loaded: false
        }
      }
      
    componentDidMount(){
    useEffect(()=>{
        fetchItems();
    },[])

    const [items,setItems]=useState([]);

    const fetchItems = async () =>{
        const data =await fetch('https://fortnite-api.theapinetwork.com/upcoming/get',{
            headers:{
                Authorization: '9d5b6ba6e3b17cd790ba96327f3e8dcb'
            }
        });
        const items=await data.json();
        console.log(items);
        items=items.items;
        setItems(items.items);
        this.setState({loaded:"true"});
        const itemList={items.map(item=>(
            <h1>{item.name}</h1>
             ))}
    }
}
render(){
  return (
    <div>{this.state.loaded ?
     itemList:null}
    </div>
  );
}
}
export default Shop;
