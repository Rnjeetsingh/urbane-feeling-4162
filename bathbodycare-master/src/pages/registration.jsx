import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../css/registration.css"
import axios from "axios";
import { useEffect } from "react";

const users = {
    name: "",
    lastname: "",
    email: "",
    confirm_email: "",
    dob: "",
    zipcode: "",
    phone: "",
    password: "",
    confirm_password: ""
}
function Registration(){
    const navigate = useNavigate();
    const [user, setUser] = useState(users)
    const [validateUser, setValidateuser] = useState([])
    const [registerPermission, setRegisterPermission] = useState(false);
    const {name, lastname, email,confirm_email, confirm_password, dob, zipcode, phone, password} = user;

    const handleChange = (e) => {
        let val = e.target.value;
        setUser( { ...user, [e.target.name]: val } )
    }
    
    useEffect(() => {
        fetch(`http://localhost:8080/users`)
        .then((res) => res.json())
        .then((res) => setValidateuser(res))
        .catch((err) => console.log(err))
    },[])


    const handleRegister = async (e) => {
        e.preventDefault();
        let check = false;
        validateUser.map((ele)=> {
            if(email == ele.email){
                check = true;
            }
        })
        if(email == "" || password == "" || zipcode == "" || phone == "" || lastname == "" || confirm_email == "" || confirm_password == "" || dob == "" || phone == ""){
            alert("Please fillup all the fields")
        }else{
            if(!check){
                if(email == confirm_email && password == confirm_password){
                    var newdata = {name,lastname,email,dob,zipcode,phone,password};
                    
                    await axios.post(`http://localhost:8080/users`, newdata)
                    .then((res) => {
                        check = false;
                        navigate("/login")
                    });
                }else{
                    alert("Email or password not Match")
                }
            }else{
                alert("User Alredy Exist")
            }
        }
    }


    return(
        <div className="mainRegister">
            <div className="registerTop">
                <h1>Create An Account</h1>
            </div>

            <div className="registerFm">
                <form>
                    <div className="inputReFm">
                        <span>* Name</span>
                        <input onChange={handleChange} value={name} type="text" name="name" id="" />
                    </div>
                    <div className="inputReFm">
                        <span>* Last Name</span>
                        <input onChange={handleChange} value={lastname} type="text" name="lastname" id="" />
                    </div>
                    <div className="inputReFm">
                        <span>* Email</span>
                        <input onChange={handleChange} value={email} type="text" name="email" id="" />
                    </div>
                    <div className="inputReFm">
                        <span>* Confirm Email</span>
                        <input onChange={handleChange} value={confirm_email} type="text" name="confirm_email" id="" />
                    </div>
                    <div className="inputReFm">
                        <span>* Birthday</span>
                        <input onChange={handleChange} value={dob} type="date" name="dob" id="" />
                    </div>
                    <div className="inputReFm">
                        <span>* Zipcode</span>
                        <input onChange={handleChange} value={zipcode} type="number" name="zipcode" id="" />
                    </div>
                    <div className="inputReFm">
                        <span>* Phone</span>
                        <input onChange={handleChange} value={phone} type="number" name="phone" id="" />
                    </div>
                    <div className="inputReFm">
                        <span>* Password</span>
                        <input onChange={handleChange} value={password} type="text" name="password" id="" />
                    </div>
                    <div className="inputReFm">
                        <span>* Confirm Password</span>
                        <input onChange={handleChange} value={confirm_password} type="text" name="confirm_password" id="" />
                    </div>
                    <div className="inputReFm">
                        <button onClick={handleRegister}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Registration