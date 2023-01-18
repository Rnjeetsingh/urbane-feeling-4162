import "../css/profile.css"
import Footer from "../components/footer.jsx"
import { Link } from "react-router-dom"
function Profile(){

    return(
        <>
        <div className="profile">
            <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw928249b8/images/myaccount.svg" alt="" />
            <div className="profileHead">
                <h1>Code4unique</h1>
            </div>
            <div className="account">
                <div className="section">
                    <Link to="/myorder">
                        <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwb53de82d/images/account-orders-icon.svg" alt="" />
                        <div className="data">
                                <h4>My Order</h4>
                        </div>
                    </Link>
                </div>
                <div className="section">
                    <Link to="/myinfo">
                        <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw91de378a/images/account-your-info-icon.svg" alt="" />
                        <div className="data">
                            <h4>My Info</h4>
                        </div>
                    </Link>
                </div>
                <div className="section">
                    <Link to="/mycart">
                        <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw04072d5a/images/AddToBag.png" alt="" />
                        <div className="data">
                                <h4>My Cart</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
    </>
    )
}

export default Profile