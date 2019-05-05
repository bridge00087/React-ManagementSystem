import React, { Component } from 'react';
import Customer from './Components/Customer';
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '山田　太郎',
  'birthday': '961222',
  'gender': '男',
  'job': '大学生'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '鈴木　二郎',
  'birthday': '970521',
  'gender': '男',
  'job': '会社員'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '宮崎　優子',
  'birthday': '890801',
  'gender': '女',
  'job': '会社員'
}
]

class App extends Component {
  render() {
    return (
      <div>
        { customers.map(c => {
          return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); }) }
      </div>
    );
  }
}

export default App;
