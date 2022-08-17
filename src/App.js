//Fragments
import Header from "./components/header/Header/header"
import Footer from "./components/header/Footer/footer" 
import Main from "./components/header/Main/Main"

const App = () => {
  return (
    <>
    <Header/>  
    <Main/>
    <Footer/>
    </> 
  )}
//Fragment: etiqueta sin nombre   // IMPORTANTE: Llamo a Header, footer, etc., que importé desde mis componentes

export default App 

  