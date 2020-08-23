import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Anwar', 'Jafor', 'Alom', 'Bappi', 'Sakib']
  
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$90.99'},
    {name: 'PDF', price:'$6.99'},
    {name: 'premier', price:'$7.99'}
]


  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
    
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }



      
   
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => { setCount(count +1);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() =>  setCount(count -1)}>Decrease</button>
      <button onMouseMove={() =>  setCount(count +1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));

  }, [])
  return(
    <div>
      <h3>dynamic Users: {users.length}</h3>
     <ul>
     
       {
         users.map(user => <li>{user.name}</li>)
         
       }
       
     </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    // color: 'black'

  }
  const {name, price}= props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}









function Person(props){
  return (
    <div style={{border:'2px solid red', width:'400px', color:'yellow'}}>
      <h3>My Name: {props.name} </h3>
      <h1>My Name: {props.name} </h1>
      <p>My profession: {props.job} </p>
    </div>
  )
}

export default App;
