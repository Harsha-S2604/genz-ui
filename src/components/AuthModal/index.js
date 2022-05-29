import { Container } from 'react-bootstrap';
import { Modal } from 'antd';
import Quotes from './Quotes';
import Authorization from './Authorization';
import "./__index.scss";

const AuthModal = ({ isShowModal, setShowAuthModal }) => {

    return (
        <Modal
            visible={isShowModal} 
            onCancel={() => setShowAuthModal(false)}
            footer={null}
            width={"auto"}
            centered
            >
                <h2 id="primary-color" className='modal-title'>GenZ BlogZ</h2>
                <Container className="d-flex modal-contents">
                    <div className='p-3'>
                        <Quotes />
                    </div>
                    <div className='p-3'>
                        <div className="modal-vertical-line"></div>
                    </div>
                    <div>
                        <Authorization />
                    </div>
                </Container>
        </Modal>
    )

}

export default AuthModal;