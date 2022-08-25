//Fragments
import Header from "./components/header/Header/header"
import Footer from "./components/header/Footer/footer" 
import Main from "./components/header/Main/Main"
import ItemCount from "./components/ItemCount/ItemCount"

const App = () => {
  return (
    <>
    <Header/>  
    <Main/>
    <ItemCount stock={10} initial={1} onAdd={1} />
    <Footer/>
    </> 
  )}
export default App 

  