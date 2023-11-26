
import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal'
import ItemCount from './components/ItemCount/ItemCount'
import Mensaje from './components/Mensaje/Mensaje'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

//Los componente los nombramos con Pascalcase

//Ventajas de trabajar con componentesc
//-Reutilzamos codigo
//.Favorece la separacion de responsabilidades
//-Es más facil de entender
//-Mejora el rendimiento de la aplicación

//Caracteristicas principales 
//-Vamos a rendirizar un unico elemento
//-Pueden recibir props.(propiedas)

//¿Que es un estado?
//Es un objeto que contiene información del componenete que puede cambiar durante la ejecución de la app

//Hooks: son funciones de la libreria que nos ayudan a manipular el estado
const App = () => {
  return (
    <div>
      {/* <TituloPrincipal saludo ='Hola comisión de los sabados'/>
      <hr />
      <ItemCount/>
      <hr />
      <Mensaje/> */}
      <NavBar/>
      <ItemListContainer greeting='Hola Mundo'/>
    </div>
  )
}

export default App