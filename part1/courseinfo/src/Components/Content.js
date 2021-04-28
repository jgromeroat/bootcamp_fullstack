import Part  from './Part'
const Content = ({listadoPartes}) => {
    
    return (
        listadoPartes.map (listadoPartes =>  (<Part parte = {listadoPartes.parte} ejercicio = {listadoPartes.ejecicios}/>)) 
    )
    
}

export default Content