import { useContext } from "react"
import {Link} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function WIKCANDLES({id, handleaddd, image,title,categor,price,ele}){
    const {isAuth} = useContext(AuthContext)
    return(
        <>
            <div className="newItemBox">
                <Link to={`${id}`}>
                <img src={image} alt="" />
                </Link>
                <div className="newItemDetails">
                <h4>{title}</h4>
                <span>{categor}</span>
                <h5>₹ {price}</h5>

                <div className="newItemBtnbx">
                  {isAuth ? <button onClick={(e) => {handleaddd(ele)}}>ADD TO CART</button> : <button><Link to="/login">ADD TO CART</Link></button>}
                </div>
                </div>
            </div>
        </>  
    )

}

function NewAndNowSideBr({status,setstatus,newSort,handleSort}){
  
  return (
    <>
      <div className="newAndNowSideBr">
        {status?
          <select value={newSort} onChange={handleSort}>
            <option value="hightolow">High To Low</option>
            <option value="lowtohigh">Low to High</option>
          </select>
        : ""  
        }

          <h4>NEW AND NOW</h4>
          <p onClick={() => setstatus(true)}>3 WIK CANDLES</p>
          <p>ALL NEW ARRIVELS</p>
          <p>AROMATHERAPY</p>
          <p>HAND SOAP'S</p>
          <p>MEN SOAP'S</p>
          <h4>TOP OFFERS</h4>
        </div>
    </>
  )
}

export {NewAndNowSideBr, WIKCANDLES}