import { Component } from "react";
import "./NavbarStyles.css";
import LogOpet from '../assets/img/logo_pet_hoster.png';

class Navbar extends Component {

    state = { clicked: false };
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render() {
        return (
            <>
                <nav>
                    <a>
                        <img src={LogOpet} alt="" className="logg"></img>
                    </a>

                    <div>
                        <ul id="navbar"
                     className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li>
                                <a href="index.html">Nosotros</a>
                            </li>
                            <li>
                                <a href="index.html">¿Como funciona?</a>
                            </li>
                            <li>
                                <a href="index.html">¿Mis Servicios?</a>
                            </li>
                            <li>
                                <a href="index.html">Ayuda</a>
                            </li>
                            <li>
                                <a href="index.html">Registrarse</a>
                            </li>
                            <li>
                                <a href="index.html" id="btnIN">Iniciar Sesion</a>
                            </li>
                        </ul>
                    </div>
                    <div id="mobile" 
                    onClick={this.handleClick}>
                        <i id="bar"
                            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                        ></i>
                    </div>
                </nav>

            </>
        )

    }
}
export default Navbar;