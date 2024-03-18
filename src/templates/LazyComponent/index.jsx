import React, { Suspense, useState } from 'react'
// import LazyComponent from '../../components/Lazy'

const loadComponent = () => import('../../components/Lazy')

const LazyComponent = React.lazy(() => import(loadComponent))

export const NewHome = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <p>
        <button onClick={() => setShow((s) => !s)}>
          show {show ? 'LC on screen' : 'LC is off screen'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  )
}
