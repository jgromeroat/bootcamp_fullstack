import React from 'react'
import Header from './Components/Header.js'
import Content from './Components/Content.js'
import Total from './Components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const listadoPartes = [{parte : part1, ejercicio : exercises1}, {parte : part2, ejercicio : exercises2}, {parte : part3, ejercicio : exercises3}]

  return (
    <div>
    <Header curso = {course}/>
    <Content listadoPartes = {listadoPartes} />
    <Total numero =  {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App