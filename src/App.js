//Fragments
import Header from "./components/header/Header/header"
import Footer from "./components/header/Footer/footer" 
import Main from "./components/header/Main/Main"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

const App = () => {
  return (
    <>
    <Header/>  
    <Main/>
    <ItemCount stock={10} initial={1} onAdd={1} />
    <ItemDetailContainer/>
    <Footer/>
    </> 
  )}
export default App 

  