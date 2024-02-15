import { useCallback, useEffect, useState } from 'react'

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  })

  const run = useCallback(() => {
    setState({
      result: null,
      error: null,
      status: 'pending',
    })

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        })
      })
      .catch((err) => {
        setState({
          result: null,
          error: err,
          status: 'error',
        })
      })
  }, [asyncFunction])

  useEffect(() => {
    if (shouldRun) {
      run()
    }
  }, [run, shouldRun])

  return [run, state.result, state.error, state.status]
}

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await data.json()

  return json
}

export const Home2 = () => {
  const [posts, setPosts] = useState()
  const [reRetchData, result, error, status] = useAsync(fetchData, true)

  useEffect(() => {
    reRetchData()
  }, [reRetchData])

  if (status === 'idle') {
    return <pre>Nada executando</pre>
  }
  if (status === 'peding') {
    return <pre>Loading...</pre>
  }
  if (status === 'erro') {
    return <pre>error.message</pre>
  }
  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>
  }

  return <pre>{JSON.stringify(result, null, 2)}</pre>
}
