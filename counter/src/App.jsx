import React, {useState} from 'react'

const App = () => {

  const [count, setCounter] = useState(0);

  const increment = ()=> {
    setCounter(prevCount => prevCount+1);
  }
  const decrement = ()=> {
    if(count > 0) {
      setCounter(prevCount => prevCount-1);
    }
  }

  const reset = ()=> {
    setCounter(prevCount => prevCount = 0)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment} className='inc'>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>  
  )
}

export default App
