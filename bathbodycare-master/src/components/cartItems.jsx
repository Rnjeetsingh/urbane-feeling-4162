import { Link } from "react-router-dom"
function CartItems({handleDelete,id,image,title,price}){
    return <>
        <div key={id} className="cartItem">
            <div className="first_item">
                <img src={image} alt="" />
                <span className="mainSpan">
                    <h4>{title}</h4>
                    <p>In stock</p>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={()=>handleDelete(id)}>Remove</button>
                </span>
            </div>
            <div className="second_item">
                <span>
                    <label>EACH ITEM</label>
                    <label>₹ {price}</label>
                </span>
                <span>
                    <label>TOTAL</label>
                    <label>₹ {price}</label>
                </span>
            </div>
        </div>
    </>

}

function CartSidebr({total}){
    return (
        <>
            <div className="coupen">
                <label htmlFor="">Apply Coupons</label>
                <div className="inputbx">
                    <input type="text" placeholder="Enter Coupon Code" />
                    <button>APPLY</button>
                </div>
            </div>
            <div className="method">
                <label htmlFor="">Shipping Method</label>
                <div className="inputbx">
                    <select> 
                        <option value="COD">Cash On Delivery</option>
                        <option value="Credit">Credit Card</option>
                        <option value="Debit">Debit Card</option>
                    </select>
                </div>
            </div>

            <div className="orDetails">
                <h3>ORDER DETAILS</h3>
                <small>Prices are inclusive of all taxes</small>
                <h4>Order Summary</h4>
            </div>
            <div className="priceData">
                <span>Total Mrp</span>
                <span>{Math.floor(total)}</span>
                <span>Shipping Charges</span>
                <span>₹0.00</span>
                <span>Order Amount</span>
                <span>{Math.floor(total)}</span>
            </div>
            <div className="placeOrder">
                <h2>
                    <span>TOTAL AMOUNG</span>
                    <span>₹ {Math.floor(total)}</span>
                </h2>
                <Link to="/placeOrderForm">
                    <button>CONTINUE CHECKOUT</button>
                </Link>
            </div>
        </>
    )
}
export {CartItems, CartSidebr};