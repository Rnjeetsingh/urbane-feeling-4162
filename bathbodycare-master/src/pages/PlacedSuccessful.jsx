import { Link } from "react-router-dom"
import "../css/placedSuccessful.css"

function PlacedSuccessful(){

    return (
        <div className="success">
            <div className="box">
                <div className="imgBx">
                    <img src="https://cdn-icons-png.flaticon.com/512/6225/6225308.png" alt="" />
                </div>
                <div className="successText">
                    <h1>Your Order Is Completed!</h1>
                    <small>You will be reciving a confirmation email with order details</small>
                    <br />
                    <br />
                    <Link to="/">
                        <button>Explore More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PlacedSuccessful