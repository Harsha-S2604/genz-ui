import { Nav } from 'react-bootstrap';
import AuthModal from '../../AuthModal';

const NavItems = ({ navItems, showAuthModal, setShowAuthModal }) => {

    return (
        <div>
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
            <AuthModal 
                isShowModal={showAuthModal}
                setShowAuthModal={setShowAuthModal}
            />
        </div>
    )

}

export default NavItems;