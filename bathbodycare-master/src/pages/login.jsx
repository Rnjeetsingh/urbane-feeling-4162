import 'font-awesome/css/font-awesome.min.css';
import { useContext, useState, useEffect } from 'react';
import { Link , useNavigate} from "react-router-dom"
import Footer from '../components/footer';
import "../css/login.css"
import axios from "axios"
import { AuthContext } from '../context/AuthContext';

const userLogin = {
    email : "rohan@gmail.com",
    password: "1234"
}

// https://reqres.in/api/login
function Login(){
    const {isAuth, Login} = useContext(AuthContext)
    const [user, setUser] = useState(userLogin)
    const [loginDeta, setLoginData] = useState([])
    const Navigate = useNavigate()

    const handleChange = (e) => {
        let val = e.target.value;
        setUser( {...user, [e.target.name]: val } )
    }

    useEffect(() => {
        fetch(`http://localhost:8080/users`)
        .then((res) => res.json())
        .then((res) => setLoginData(res))
        .catch((err) => console.log(err))
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        loginDeta.map((ele) => {
            if(ele.email == email && ele.password == password){
                Login(ele)
            }
        })
    }
    
    const {email,password} = user;
    
    useEffect(() => {
        if(isAuth){
          Navigate("/")
        }
      },[isAuth])
      
    return (
        <>
            <p><Link to="/">Home</Link></p>
            <div className="loginPage">
                <div className="loginImg">
                    <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw1df43410/images/signin.png" alt="" />
                </div>
                <div className="loginText">
                    <h1>Sign In or Sign Up</h1>
                </div>

                <div className="loginContainer">
                    <div className="loginBx">
                        <h3>SIGN IN</h3>    

                        <div className="loginBtnBx">
                            <button><i className='fa fa-facebook'></i> Login with Facebook</button>
                            <button><i className='fa fa-google'></i> Login with Google</button>
                        </div>
                        <center>
                            <span style={{fontSize: "12px"}}>via BBW Login</span>
                        </center>
                        <p>If you alredy have an account with us, sign in below</p>

                        <form onSubmit={handleSubmit}>
                            <div className="loginInputBx">
                                <span>Email Address</span>
                                <input name='email' value={email} type="email" placeholder='Enter your email' onChange={handleChange} />
                            </div>
                            <div className="loginInputBx">
                                <span>Password</span>
                                <input type="password" name='password' onChange={handleChange} placeholder="Password" value={password} />
                                <Link to="/forgote_password">Forgote Password</Link>
                            </div>
                            <center>
                                <Link>Privacy Policy</Link>
                                <br />
                                <br />
                                <button>SIGN IN</button>
                            </center>
                        </form>


                    </div>

                    <div className="loginBx">
                        <h3>SIGN UP</h3>
                        <p>Create an account to access the best of your fevorite store</p>

                        <div className="loginBtnBx">
                            <button><i className='fa fa-facebook'></i> Login with Facebook</button>
                            <button><i className='fa fa-google'></i> Login with Google</button>
                        </div>
                        <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw18aed039/images/benefits.png" alt="" />
                        <center>
                            <Link to="/register">
                                <button>Create Account</button>
                            </Link>
                        </center>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login