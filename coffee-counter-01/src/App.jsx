import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  const buyCoffee =()=>{
    if(counter >= 20){
      console.log("No more coffee" )
      return;
    }
      counter = counter + 1  
      console.log("coffee gifted", {counter})
      setCount(counter)
  }

  const drinkLess = ()=>{
    if(counter <= 0) return;
    
    counter = counter -1;
    setCount(counter)

  }

  return (
    <>
    <div>
    
    <h1>DhanusH_Codes</h1>
     <h2>Welcome to my X Account!</h2>

     <h3>Buy me a Coffee</h3>
     <button onClick={buyCoffee} >Buy  </button>
     {counter >= 20 ? (
          <p>No more coffee</p>
        ) : (
          <p>Coffee's Today: {counter}</p>
        )}
     {/* <p> Coffee's Today: {counter} </p> */}


     <button onClick={drinkLess}> Drink less  </button>
        {counter <= 20 ? (<p> Need More Coffee</p>) : (<p> Coffee's Today: {counter} </p>)

        }
      <p> Coffee's Today: {counter} </p>

     <p>

     </p>
    </div>
     
    </>
  )
}

export default App
