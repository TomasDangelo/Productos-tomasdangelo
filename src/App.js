//Fragments
import Header from "./components/header/Header/header"
import Footer from "./components/header/Footer/footer" 
import Main from "./components/header/Main/Main"
import { BrowserRouter } from "react-router-dom"
import CartProvider from "./context/CartContext"

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
          <Header/>  
          <Main/>
          <Footer/>
      </BrowserRouter> 
  </CartProvider> 
  )}
export default App 


  