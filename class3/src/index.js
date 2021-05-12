import reactDom from 'react-dom';
import {useState} from 'react'

const Counter = ({ number })=>{
  return <h1>{number}</h1>
}

const App = (props) =>{
   
  const [contador, setContador] =  useState(0)

  const handleClick = () => {
    setContador (contador + 1)
  }

  const handleClickReset = () => {
    setContador (0)
  }

  const isEven = contador % 2 === 0
  const mensaje  = isEven ? 'Es par!' : 'Es impar!'

  return (
    <div>
      <p>El valor del contador es: </p>
     <Counter number ={contador}/>
      <p>{mensaje}</p>
      <button onClick = {handleClick}>
        Incrementar
      </button>
      <button onClick = {handleClickReset}>
        reset
      </button>
    </div>  
    )
}

reactDom.render (<App />, 
  document.getElementById('root')
);

