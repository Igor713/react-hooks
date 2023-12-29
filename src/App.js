import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

const eventFn = () => {
  console.log('H1 clicado')
}

function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // componentDidUpdate - Executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('componentDidUpdate')
  })

  // componentDidMount - Executa apenas uma vez
  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventFn)

    //componentWillAmount - Limpeza
    return () => {
      document.querySelector('h1').removeEventListener('click', eventFn)
    }
  }, [])

  useEffect(() => {
    console.log('C1: ', counter, 'C2: ', counter2)
  }, [counter, counter2])

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default App
