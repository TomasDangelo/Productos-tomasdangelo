import Navbar from '../Nav/Navbar'
import estilos from './footer.module.css'
import { Link } from 'react-router-dom'
const Footer = () =>{
    return(
    <footer className={estilos.footer}>
            <div>
            <p className={estilos.parrafo}>Proyecto realizado por Tomás D'Angelo con ReactJS </p>
            </div>
            <div>
            <p>TOM'S STORE ® 2022</p>
            </div>
            <div>
            <p>Contacto</p>
            <Link className={estilos.linkar} to={'/'}>Ir al inicio</Link>
            </div>
    </footer>
    )     
}

export default Footer