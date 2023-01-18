import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../css/myOrder.css";


function Myorder(){
    const { token, isAuth } = useContext(AuthContext)
    const [order, setOrder] = useState([])
    const [place, setPlace] = useState([])
    const [loading, setLoading] = useState(false)

    
    const getData = () => {
        return fetch(` http://localhost:8080/PlaceOrder`)
        .then((res) => res.json());
    };
    useEffect(() => {
        fetchData();
    }, []);

    
  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await getData();
      setOrder(data);
      setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err);
    }
  };

    return(
        <div className="myorder">
            <h1>My Order</h1>
            <div className="orderGird">
                {order.map((ele) => (
                    ele.products.map((item) => (
                        ele.userId == token.id ? 
                        <div key={item.id} className="box">
                            <img src={item.image} alt="" />
                            <div className="orderData">
                                <h4>{item.title}</h4>
                                <p>₹ {item.price}</p>
                                <h5>{ele.type}</h5>
                                <button>Tract Order</button>
                                {ele.deliver ?  <span>Deliverd</span> : <span>Your package in on the way</span>}
                            </div>
                        </div>
                        : "" 
                    ))
                ))}
            </div>
        </div>
    )
}

export default Myorder