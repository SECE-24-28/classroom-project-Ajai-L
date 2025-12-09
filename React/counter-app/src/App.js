import './App.css'
import Component1 from './Component1';
import Component, { Component2, Component3 } from './Component2';
import Compt1 from './Compt1';
import { Compt2 } from './Compt2';
import Compt, { Compt101, Compt102 } from './Compt3';


function App() {

  return (
    <div className="App">
      <h1>Learning React</h1>
      <Component1></Component1>
      <Component2></Component2>
      <Component></Component>
      <Component3></Component3>
      <Compt1></Compt1>
      <Compt2></Compt2>
      <Compt></Compt>
      <Compt101></Compt101>
      <Compt102></Compt102>
    </div>
  );
    
}

export default App;
