import React, { Component } from 'react'
import Routes from './routes'

import Header from './components/Header'



import './style.css'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
)

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}
*/

export default App;
