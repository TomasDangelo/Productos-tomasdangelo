import Navbar from "../Nav/Navbar"
import clases from './header.module.css'

const Header = () => {
    return(
        <header className={clases.contenedorMain}>
        <h2 className={clases.tituloheader}>HEY <br/>JUDE</h2>
        <Navbar/>
        </header>
    )
}


export default Header