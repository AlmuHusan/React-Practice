import React from 'react';
import { connect } from 'react-redux';
import { getAdvice,getSpecificAdvice } from './Action';


export  class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: "Hello",
    };
    this.getRandomAdvice= this.getRandomAdvice.bind(this);
    this.reset= this.reset.bind(this);
  }
  reset(){
    this.props.getSpecificAdvice(2);
    
  }
  getRandomAdvice(){
    this.props.getAdvice();
    
  }

  componentDidMount(){
    this.props.getSpecificAdvice(2);
  }

  render(){
    
    return(<div>
        <button id="reset" onClick={this.reset}>reset</button>
        <button id="RandoButton"onClick={this.getRandomAdvice}>More Random Advice</button>
        <label id="label" >{this.props.data}</label>
        
    </div>);

  }

}

const mapStateToProps = (state) => {
  return ({
    data: state.data
  })
};



export default connect(mapStateToProps,{ getAdvice,getSpecificAdvice })(App);
