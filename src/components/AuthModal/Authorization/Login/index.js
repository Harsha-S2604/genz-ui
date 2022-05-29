import "./__login.scss";

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        console.log("login user")
    }

    const validateInput = (event) => {

        const { name, value } = event;


        
    }


    return (
        <div className="p-4">
            <form
                name="login"
                className="login-form">

                <div className='form-group align-items-center'>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                        </div>
                        <input className='form-control shadow-none' type='email' placeholder='Enter your email' />
                    </div>
                </div>

                <div className='form-group align-items-center'>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-lock" aria-hidden="true"></i></span>
                        </div>
                        <input className='form-control shadow-none' type='password' placeholder='Enter your password' />
                    </div>
                </div>

                <div className="login-button">
                    <button
                        className="btn btn-outline-dark"
                        onClick={handleLogin}
                    >Login</button>
                </div>

            </form>
        </div>
    )
}

export default Login;