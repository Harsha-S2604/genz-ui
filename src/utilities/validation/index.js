

class Validation {


    getDefaultReturnValue = () => {

        const validateObj = {
            "isValid": false,
            "message": ""
        }

        return validateObj
    }

    validate = (type, value) => {
        switch(type) {
            case "email":
                const validEmail = this.validateEmail(value);
                return validEmail
            case "password":
                const validPassword = this.validatePassword(value);
                return validPassword
        }
    }

    validatePassword = (value) => {
        const validationResult = this.getDefaultReturnValue();

        if(!value){
            validationResult["isValid"] = false;
            validationResult["message"] = "field should not be empty" 
        } else if(value.length < 6) {
            validationResult["isValid"] = false,
            validationResult["message"] = "minimum 6 characters is required"
        } else {
            const validPasswordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if(value.match(validPasswordRegEx)) {
                validationResult["isValid"] = true;
                validationResult["message"] = "valid password";
            } else {
                validationResult["isValid"] = false;
                validationResult["message"] = "Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
            }
        }

        return validationResult
    }
    
    validateEmail = (value) => {
        const validationResult = this.getDefaultReturnValue();

        if(!value){
            validationResult["isValid"] = false;
            validationResult["message"] = "field should not be empty" 
        } else {
            const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(value.match(validEmailRegex)) {
                validationResult["isValid"] = true;
                validationResult["message"] = "valid email"
            } else {
                validationResult["isValid"] = false;
                validationResult["message"] = "not a valid email"
            }

        }

        return validationResult
    }
}

export default Validation;