import {Link} from 'react-router-dom';
import LoginImg from "./images/login.webp";
import "./css/Login.css";

const Login = () => {
    return (
        <section className='login'>

        <div className='left-content'>
            <img src={LoginImg} alt='login ' />
        </div>

        
        <div className='right-content'>
                <div className='container'>
                    <div className='login-form'>
                        <form>
                            <h1>سجل دخولك الان  </h1>
                            <div className='input'>
                                <label>  البريد الإلكتروني </label>
                                <input type='email' required placeholder='البريد' />
                            </div>

                            <div className='input'>
                                <label> كلمة المرور </label>
                                <input type='password' required placeholder=' كلمة المرور ' />
                            </div>

                            <button> تسجيل الدخول </button>
                            <h2> <Link to="/signup"> حساب جديد ؟ </Link> هل تريد صنع  </h2>


                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
