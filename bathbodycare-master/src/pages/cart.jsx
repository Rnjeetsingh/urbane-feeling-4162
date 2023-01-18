import { useContext , useEffect, useState } from "react"
import Footer from "../components/footer";
import {CartItems, CartSidebr} from "../components/cartItems";
import { AuthContext } from "../context/AuthContext";
import "../css/cart.css"
import axios from "axios";

function Cart(){
    const [myCart, setMycart]= useState([])
    const [showForm, setShowform] = useState(false)
    const { token } = useContext(AuthContext)
    let total = 0;

    useEffect(() => {
        fetch(`http://localhost:8080/addtocart`)
        .then((res) => res.json())
        .then((res) => setMycart(res))
        .catch((err) => console.log(err))
    },[])

    myCart.map((ele) => {
        if(ele.userId == token.id){
            total += ele.price
        }
    })

    const handleDelete = (id) => {
        const afterDelete = myCart.filter((ele) => ele.id !== id);
        setMycart(afterDelete);
        axios.delete(`http://localhost:8080/addtocart/${id}`)
        .then(() => {
            this.setState({ status: 'Delete successful' })
        });
    }

    return (
        <>
        <div className="cart">
            <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwa4226f2e/images/BBW-strip.jpg" alt="" />
            <div className="cartMain">
                <div className="cartBox">
                    {myCart.map((ele) => ( 
                        ele.userId == token.id ?
                        <CartItems id={ele.id} title={ele.title} image={ele.image} price={ele.price} key={ele.id} handleDelete={handleDelete} /> 
                        : ""
                    ))}

                </div>
                <div className="cartBox">
                    <CartSidebr total={total} />
                </div>
            </div>
        </div>
            <Footer />
        </>
    )
}
export default Cart