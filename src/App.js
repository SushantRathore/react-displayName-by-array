import  React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('ol', null ,
React.createElement('li', null ,Tyler),
React.createElement('li', null ,Tyler),
React.createElement('li', null ,Tyler))

ReactDOM.render(element, document.getElementById('root'))
