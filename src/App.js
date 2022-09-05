//Fragments
import Header from "./components/header/Header/header"
import Footer from "./components/header/Footer/footer" 
import Main from "./components/header/Main/Main"
// import ItemCount from "./components/ItemCount/ItemCount"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
  <BrowserRouter>
    <Header/>  
    <Main/>
    <Footer/>
  </BrowserRouter> 
  )}
export default App 


{/* <ItemCount stock={10} initial={1} onAdd={1} /> */}
  