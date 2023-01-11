import React from 'react';
import logo from './logo.svg';
import './App.css';
import {splitIntoWords} from "./01-hello-tests/01";
import {sum} from "./03 func/03";

const sentensive = 'hello roman yo';
const result = splitIntoWords(sentensive)

type UsersType = {
  id: number
  name: string
}
const users: Array<UsersType> = [
  {id:1, name: 'sveta'},
  {id:2, name: 'kotleta'},
  {id:3, name: 'kolbaska'},
  {id:4, name: 'ivan'},
  {id:5, name: 'baklajan'},
]

function App() {
  sum(1,3)
  return (
    <div className="App">
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
