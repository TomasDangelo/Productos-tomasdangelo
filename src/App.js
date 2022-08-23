//Fragments
import Header from "./components/header/Header/header"
import Footer from "./components/header/Footer/footer" 
import Main from "./components/header/Main/Main"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Texto from "./components/Texto"
import ItemCount from "./components/ItemCount/ItemCount"

const App = () => {
  let carrito = []
  const item = {nombre: "soy un item"}
  // const onAdd = () => { 
  //   carrito.push(item)
  //   alert("Productos agregados exitosamente")
  // }

  return (
    <>
    <Header/>  
    <ItemListContainer saludo="Hola! Bienvenido a mi página de React"/>
    <Main/>
    <ItemCount stock={10} initial={1} onAdd={1} />
    <Footer/>
    </> 
  )}
//Fragment: etiqueta sin nombre   // IMPORTANTE: Llamo a Header, footer, etc., que importé desde mis componentes
//Recordar que saqué <Texto/> del flujo de la página (ejemplo dado en clase) pero sigue existiendo el componente
export default App 

  