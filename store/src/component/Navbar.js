import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {ButtonContainer} from './Button'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-10">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                            Products
 </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus" />
         my cart
     </ButtonContainer>
                </Link>
            </nav>
        );
    }
}

const NavWrapper =styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-tranform:capitalize  ;
}`
export default Navbar;