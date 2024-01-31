import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header  from './components/Header'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>

  )
}

function App() {
  const [count, setCount] = useState(0)
return (
  <>
<div className = 'App'>
<Header name= 'Adrián Larreategui' age= '38'/>
<Home 
  section= '¿Quién soy?'
  data ='Como indica mi nombre, me llamo Adrián, soy de Algorta y actualmente estoy estudiando diversas 
  tecnologías de programación en un bootcamp con The Bridge.'
/>

<Home 
  section= '¿Cuáles son mis estudios?'
  data ='Estudié Ingeniería Química en su día, así como el Máster de Formación de Profesorado en la Universidad de La Rioja.
  Actualmente, estoy haciendo un curso de FullStack con The Bridge a tiempo parcial.'
/>

<Home 
  section= 'Tecnologías que conozco:'
  data ='Durante el curso, hemos estudiado por la parte de FrontEnd: HTML, CSS, Bootstrap y Javascript.
  Pasando al BackEnd, Nodejs, Express, Sequelize, Mongo y Docker.
  En estos momentos, hemos empezado la parte de React'
/>
</div>
  </>
)
}

export default App
