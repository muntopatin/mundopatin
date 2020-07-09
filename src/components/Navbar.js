import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                {}
                <img src={logo} alt="store"className="navbar-brand" />
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Inicio
                    </Link>
                    </li>
                    <li className="nav-item ml-5">
                    <Link to="/productlist" className="nav-link">
                        Productos
                    </Link>
                    </li>
                    <li className="nav-item ml-5">
                    <Link to="/nosotros" className="nav-link">
                        Sobre nosotros
                    </Link>
                    </li>
                    <li className="nav-item ml-5">
                    <Link to="/galeriaFotos" className="nav-link">
                        Galeria de Fotos
                    </Link>
                    </li>
                    <li className="nav-item ml-5">
                    <Link to="/Contactos" className="nav-link">
                        Contactos
                    </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        Carrito
                    </ButtonContainer>
                </Link>

            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: radial-gradient(circle, rgba(34,193,195,1) 1%,  rgba(12, 52, 184, 0.516) 80%);
.nav-link{
color: var(--mainBlue)!important;
font-size:1.3rem;
tex-transform:capitalize;
}

`;