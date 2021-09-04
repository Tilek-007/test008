import React from 'react';
import './App.css';

const user = {
  name:'Tilek',
  surname:'Almazbekov'
}

class App extends React.Component {

  getUser() {
    return 'Hello'
  }

    render() {
      
      return (
      <> 
      <h1 className="App">{this.getUser()}</h1>
      <h1 style={ { color:'red', textAlign: 'center'} }>Hello, React</h1>
      </>
      );
    }
}

export default App;
