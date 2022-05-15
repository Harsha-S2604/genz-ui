import React, { useState } from 'react';

import { Navbar as NavbarBootStrap, Container } from 'react-bootstrap';
import NavItems from './Navitems';

const Navbar = () => {

    const [showLoginModal, setShowLoginModal] = useState(false)

    const navItems = [
        {name: "Login", href: "#", type: "modal", modalVar: showLoginModal, modalFunc: setShowLoginModal}
    ]

    return (
        <NavbarBootStrap collapseOnSelect fixed='top' expand='sm' bg='light' variant='light'>
            <Container>
                <NavbarBootStrap.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarBootStrap.Collapse>
                    <NavbarBootStrap.Brand href="#home">GenZ BlogZ</NavbarBootStrap.Brand>
                    <NavItems navItems={navItems} />
                </NavbarBootStrap.Collapse>
            </Container>
        </NavbarBootStrap>
    )
}

export default Navbar;