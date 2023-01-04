import React from 'react';
import logo from './logo.svg';
import './App.css';
import {splitIntoWords} from "./01-hello-tests/01";

const sentensive = 'hello roman yo';
const result = splitIntoWords(sentensive)

console.log(result)
console.log(result[0] === 'one')
console.log(result[1] === 'two')
console.log(result[2] === 'three')
function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
