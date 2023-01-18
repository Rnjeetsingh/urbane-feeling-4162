import { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios";
import $ from 'jquery';
import { useParams } from "react-router-dom";
import "../css/singleProduct.css"
import Footer from "../components/footer";

$(document).on("click",".singleDropdown",function(e){
    // $(".singleDropdown").removeClass("active")
    $(this).toggleClass("active")
})

function SingleProduct(){
    const [singleProduct, setSingleProduct] = useState({})
    const [qty, setQty] = useState(1)
    const {id} = useParams()

    const handleQty = (val)=>{
        setQty(qty+val)
    }

    // https://fakestoreapi.com/products/${id}

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(`http://localhost:8080/data/${id}`);
          setSingleProduct( result.data );
        };
        fetchData();
      }, []);

    const { title, category, description, image, price } = singleProduct;

    return (
        <>
        <div className="singleMain">
            <div className="singleImg">
                <img src={image} alt="" />
            </div>
            <div className="singleDetails">
                <h1>{title}</h1>
                <h4>MRP ₹{price}</h4>
                <p>Inclusive of all Taxes</p>
                <p>Mix & Match: Buy 2, Get 2</p>
                
                <div className="singleQty">
                    <input onChange={()=> ""} type="number" value={qty} />
                    <button disabled={qty <= 1} style={{background: qty <= 1 ? "#cccc" : "#000"}} onClick={()=>handleQty(-1)}>-</button>
                    <button disabled={qty == 10} style={{background: qty >= 10 ? "#cccc" : "#000"}} onClick={()=>handleQty(1)}>+</button>
                    <button style={{background: "#000"}}>ADD TO CART</button>
                </div>

                <h5>In Stock</h5>
                <div className="singleInputBx">
                    <input type="number" onChange={()=> ""} placeholder="Enter Your Pincode"  />
                    <button>Check</button>
                </div>
                <br />
                <div className="singleLogo">
                    <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwaae72104/images/get-it-on-day.svg" alt="" />
                    <span>Enter Pincode to Check Estimation Days</span>
                </div>
                {/*  */}
                    <div className="singleDropdown">
                        <div className="singleDown">
                            <h4>FRAGRANCE 
                                <span>
                                    <i className="fa fa-chevron-up"></i>
                                </span>
                            </h4>
                            <span>Candied Apples, Crisp Pears, Oranges with Natural Essential Oils</span>
                        </div>
                    </div>
                    <div className="singleDropdown">
                        <div className="singleDown">
                            <h4>OVERVIEW 
                                <span>
                                    <i className="fa fa-chevron-up"></i>
                                </span>
                            </h4>
                            <span>The key to unwrapping the warm spirit of Christmas: this candied fruit treat. Candle comes
                                topped with a decorative lid.</span>
                        </div>
                    </div>
                    <div className="singleDropdown">
                        <div className="singleDown">
                            <h4>MORE INFO 
                                <span>
                                    <i className="fa fa-chevron-up"></i>
                                </span>
                            </h4>
                            <span>
                                <h6>Country of Origin:</h6>
                                <p>United States of America</p>
                                <h6>Packer/lmporter Details :</h6>
                                <p>Apparel Group India Pvt Ltd. 907, B Wing, Mittal Commercia, Near Mittal Commercial
                                    Estate, Asanpada,Marol, Andheri (East) Mumbai</p>
                            </span>
                        </div>
                    </div>
                {/*  */}
            </div>
        </div>
            <Footer />
        </>
    )
}

export default SingleProduct