import Validation from "./validation";

class Utilities {

    constructor() {
        this.validation = new Validation();
    }

    validate = (type, value) => {
        this.validation.validate(type, value);
    }
}


export default Utilities;