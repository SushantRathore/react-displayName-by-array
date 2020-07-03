import  React from 'react'
import ReactDOM from 'react-dom'
//using array for displying list of name 
const people = [

  {name : 'Raju'},
  {name : 'Babu Bhaiya'},
  {name : 'shaam'}
]
const element = React.createElement('ul', null ,
people.map((person) => (
React.createElement('li', null , person.name))))

ReactDOM.render(element, document.getElementById('root'))
