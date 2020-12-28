
import './App.css';
import React from 'react';
import Component1 from './Component1';

class App extends React.Component {
  state={
    message:''
  }
  nameValidator = (event) => {
    var name=event.target.value;
    console.log(name)
    if(!name.match(/^[a-zA-Z]+$/)){
      this.setState({message:"Enter letters only"})
    } else {
      if(name.length<3){
        this.setState({message:"Enter at least three letters only"})
      } else {
      this.setState({message:""})
      }
    }
  }

  render() { 
    return ( 
      <div className="App">
        <Component1 
        changed = {(event) => this.nameValidator(event)}
        message={this.state.message} />
      </div>
     );
  }
}
 



export default App;
