import "../css/footer.css"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
function Footer(){
    const {isAuth} = useContext(AuthContext)
    return(
        <footer>
            
            <div className="footerBoxs">
                <p>Get email offers and latest news from Bath & Body Works!</p>
                
                <span>Enter Email</span>
                <div className="footerInputBx">
                    <input type="text" />
                </div>
                
                <span>Confirm Email</span>
                <div className="footerInputBx">
                    <input type="text" />
                    <button>SUBMIT</button>
                </div>
            </div>

            <div className="footerBoxs">
                <h3>CUSTOMER CARE</h3>
                <a href="">Help & FAQs</a>
                <a href="">Shipping</a>
                <a href="">Returns & Exchanges</a>
                <a href="">Order Tracking</a>
                <a href="">Contact IJS</a>
            </div>
            <div className="footerBoxs">
                <h3>MY ACCOUNT</h3>
                {
                    !isAuth ? <Link to="/login">Sign In or Sign LJP</Link> : "" 
                }
                <a href="">Order History</a>
                <a href="">My Love-lt List</a>
            </div>
            <div className="footerBoxs">
                <h3>DISCOVER</h3>
                <a href="">Our Story</a>
                <a href="">Shop by Fragrance</a>
                <a href="">New & Now</a>
            </div>
            <div className="footerBoxs">
                <h3>FIND US</h3>
                <a href="">Store Locator</a>
                <a href="">Global Locations</a>
            </div>

        </footer>
    )
}export default Footer