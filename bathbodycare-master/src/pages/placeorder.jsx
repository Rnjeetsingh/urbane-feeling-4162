import "../css/placeorder.css"
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const placeData = {
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    pincode: "",
    country: "India",
    state: "",
    phone: "",
    payment_type: "COD"
}

function PlaceOrder(){
    const [myCart, setMycart]= useState([])
    const [myOrder, setMyorder] = useState([])
    const [orderData, setOrderData] = useState([])
    const {token} = useContext(AuthContext)
    const navigate = useNavigate();
    let total = 0;

    const { firstname, lastname,address,city, pincode, country, state, phone, payment_type } = orderData

    useEffect(() => {
        fetch(`http://localhost:8080/addtocart`)
        .then((res) => res.json())
        .then((res) => {
            setMycart(res)
        })
        .catch((err) => console.log(err))
    },[])

    
    let newArr = []
    myCart.map((ele) => {
        if(ele.userId == token.id){
            total+= ele.price;
            newArr.push(ele)
        }
    })

    const handleChange = (e)=>{
        let val = e.target.value;
        setOrderData({...orderData,[e.target.name]:val})
    }

    const handlePlace = async (e) => {
        const newData = {
            firstname,
            lastname,
            address,
            city,
            pincode,
            country,
            state,
            phone,
            payment_type,
            deliver: false,
            products: newArr,
            userId: token.id
        }
        if(firstname && lastname && address && city && pincode && country && state && phone && payment_type){
            console.log(newData)
            await axios.post(`http://localhost:8080/PlaceOrder`, newData).then((e) => {
                console.log(e.data);
                navigate("/orderplaced")
            });
        }
    }
    return (
        <div className="orderMain">
            <div className="orderFm">
                <h1>ADDRESS</h1>
                    <div className="inputBx">
                        <span>
                            <label>First Name</label>
                            <input onChange={handleChange} value={firstname} name="firstname" type="text"  />
                        </span>
                        <span>
                            <label>Last Name</label>
                            <input type="text" onChange={handleChange} value={lastname} name="lastname" />
                        </span>
                    </div>
                    <div className="inputBx">
                        <span>
                            <label>Address</label>
                            <input type="text" onChange={handleChange} value={address} name="address" />
                        </span>
                    </div>

                    <div className="inputBx">
                        <span>
                            <label>Country</label>
                            <select onChange={handleChange} value={country} name="country">
                                <option value="">Seletc Country</option>
                                <option value="India">India</option>
                            </select>
                        </span>
                        <span>
                            <label>Pin Code</label>
                            <input type="number" onChange={handleChange} value={pincode} name="pincode" />
                        </span>
                    </div>

                    <div className="inputBx">
                        <span>
                            <label>State</label>
                            <input type="text" onChange={handleChange} value={state} name="state" />
                        </span>
                        <span>
                            <label>City</label>
                            <input type="text" onChange={handleChange} value={city} name="city" />
                        </span>
                    </div>
                    
                    <div className="inputBx">
                        <span>
                            <label>Phone Number</label>
                            <input type="number" onChange={handleChange} value={phone} name="phone" />
                        </span>
                        <span>
                            <label>Payment Method</label>
                            <select name="payment_type" value={payment_type} onChange={handleChange}>
                                <option value="">Select Payment Method</option>
                                <option value="Cash on Delivery">Cash On Delivery</option>
                            </select>
                        </span>
                    </div>
            </div>
            {/*  */}
            <div className="orderSide">
                <h4>ORDER DETAILS</h4>
                <small>Prices are inclusive of all taxes</small>
                <div className="data">
                    <span>TOTAL MRP</span>
                    <span>₹{Math.floor(total)}</span>
                    <span>Shipping Charge</span>
                    <span>₹0.00</span>
                </div>

                <div className="placeOrder">
                    <h2>
                        <span>TOTAL AMOUNG</span>
                        <span>₹ {Math.floor(total)}</span>
                    </h2>
                    <button type="submit" onClick={handlePlace}>CONTINUE CHECKOUT</button>
                </div>
            </div>

        </div>
    )
}
export default PlaceOrder