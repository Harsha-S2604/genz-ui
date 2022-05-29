import React, { useState } from 'react';

import { Navbar as NavbarBootStrap, Container } from 'react-bootstrap';
import NavItems from './Navitems';

const Navbar = () => {

    const [showAuthModal, setShowAuthModal] = useState(false)

    const navItems = [
        {name: "Login", href: "#", type: "modal", modalVar: showAuthModal, modalFunc: setShowAuthModal}
    ]

    return (
        <NavbarBootStrap collapseOnSelect fixed='top' expand='sm' bg='light' variant='light'>
            <Container>
                <NavbarBootStrap.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarBootStrap.Collapse>
                    <NavbarBootStrap.Brand id="primary-color" href="#home">GenZ BlogZ</NavbarBootStrap.Brand>
                    <NavItems 
                        navItems={navItems} 
                        showAuthModal={showAuthModal}
                        setShowAuthModal={setShowAuthModal} />
                </NavbarBootStrap.Collapse>
            </Container>
        </NavbarBootStrap>
    )
}

export default Navbar;