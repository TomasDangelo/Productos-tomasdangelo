import estilos from './footer.module.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () =>{
    return(
    <footer className={estilos.footer}>
            <div><p className={estilos.parrafo}>Proyecto realizado por Tomás D'Angelo con ReactJS </p></div>
            <div><p>TOM'S STORE ® 2022</p></div>
            <div>
            <a className={estilos.linkar} target={'_blank'} href="https://github.com/TomasDangelo/Productos-tomasdangelo">Github<AiFillGithub></AiFillGithub> </a>
            <a className={estilos.linkar} target={'_blank'} href="https://www.linkedin.com/in/tomasdangelo/">LinkedIn <AiFillLinkedin></AiFillLinkedin></a>
            </div>
    </footer>
    )     
}

export default Footer