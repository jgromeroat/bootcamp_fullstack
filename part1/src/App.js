import './App.css';
import Mensaje from './Mensaje.js'

const App = () => {
   return (
    <div className="App">
      <Mensaje color ='red' message = 'Estamos trabajando'/>
      <Mensaje color ='green' message = 'en un curos'/>
      <Mensaje color ='blue' message = 'de REACT'/>
    </div>  
  )
}

export default App;
