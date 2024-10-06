import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <Child />
    </div>
  )
}

function Child() {
  return <span>big-react</span>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

console.log(React);
console.log(<App />);
console.log(ReactDOM);
