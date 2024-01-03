// import logo from './logo.svg'
import P from 'prop-types'
import './App.css'
import React, { useCallback, useState } from 'react'

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>
})

Button.propTypes = {
  incrementButton: P.func,
}

function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num)
  }, [])

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter}></Button>
    </div>
  )
}

export default App
