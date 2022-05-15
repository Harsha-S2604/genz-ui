import { Nav } from 'react-bootstrap';

const NavItems = ({ navItems }) => {

    return (
        <Nav className="mr-auto">
            {navItems.map((navItem, i) => {
                if(navItem.type === "modal") {
                    return (
                        <Nav.Link
                            key={i} 
                            eventKey={i} 
                            href={navItem.href}
                            onClick={() => navItem.modalFunc(!navItem.modalVar)}>
                                {navItem.name}
                        </Nav.Link>
                    )
                }
                return (
                        <Nav.Link 
                            key={i} 
                            eventKey={i} 
                            href={navItem.href}>
                                {navItem.name}
                        </Nav.Link>
                )
            })}
        </Nav>
    )

}

export default NavItems;