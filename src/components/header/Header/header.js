import Navbar from "../Nav/Navbar"
import clases from './header.module.css'

const Header = () => {
    return(
        <header className={clases.contenedorMain}>
        <Navbar/>
        </header>
    )
}


export default Header