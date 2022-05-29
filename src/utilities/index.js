import Validation from "./validation";

let validation = null;

const Utilities = {

    init: () => {
        validation = new Validation();        
    }
}

export default Utilities;