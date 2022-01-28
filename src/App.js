import React from 'react';
import './style.css';

export default function App() {
  const grocery = ['Pizza', 'Milk', 'Juice'];

  const groceryItems = grocery.map((item) =><li><h5>{item}</h5></li>);

  console.log(groceryItems)
  return (
    <div>
      <h1>Hello Consumers</h1>
      <h3>Here is my grocerylist.</h3>
      <ul>{groceryItems}</ul>
      <button>Show Me </button>
    </div>
  );
}
