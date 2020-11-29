import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// import Fred from './Fred'

function Bank() {
  return (
    <div>
      <h1>Our new bank component!</h1>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Bank />
  </React.StrictMode>,
  document.getElementById('root')
);


