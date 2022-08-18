//Fragments
import Header from "./components/header/Header/header"
import Footer from "./components/header/Footer/footer" 
import Main from "./components/header/Main/Main"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
    <Header/>  
    <Main/>
    <ItemListContainer saludo="Hola! Bienvenido a mi página de React"/>
    <Footer/>
    </> 
  )}
//Fragment: etiqueta sin nombre   // IMPORTANTE: Llamo a Header, footer, etc., que importé desde mis componentes

export default App 

  