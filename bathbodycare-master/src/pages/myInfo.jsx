import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import "../css/myinfo.css"

function MyInfo(){
    const {token} = useContext(AuthContext);
    // console.log(token)
    const { name, dob, email, phone, zipcode, lastname } = token
    return(
        <div className="profiledata">
            <div className="inputBx">
                <span>Name</span>
                <span>{name+" "+ lastname}</span>
            </div>
            <div className="inputBx">
                <span>Birth</span>
                <span>{dob}</span>
            </div>
            <div className="inputBx">
                <span>Email</span>
                <span>{email}</span>
            </div>
            <div className="inputBx">
                <span>Phone</span>
                <span>{phone}</span>
            </div>
            <div className="inputBx">
                <span>Pincode</span>
                <span>{zipcode}</span>
            </div>
            <div className="inputBx">
                <button>Edit</button>
            </div>
        </div>
    )
}
export default MyInfo