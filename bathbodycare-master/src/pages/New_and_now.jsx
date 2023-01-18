// import React, {  } from "react";
import "../css/newandnow.css";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/footer";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import {NewAndNowSideBr, WIKCANDLES } from "../components/WIKCANDLES";
import { AuthContext } from "../context/AuthContext";

const getCurrentPage = (currentLimit) => {
  currentLimit = Number(currentLimit);
  if (typeof currentLimit !== "number" || currentLimit <= 0) {
    currentLimit = 5;
  }
  if (!currentLimit) {
    currentLimit = 5;
  }
  return currentLimit;
};
const Sorting = (currentLimit) => {
  if (currentLimit == "") {
    currentLimit = "lowtohigh";
  }
  return (currentLimit = "lowtohigh");
};

function New_and_now() {
  const { token } = useContext(AuthContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const initialParams = getCurrentPage(searchParams.get("limit"));
  const sorting = Sorting(searchParams.get("sort"));
  const [status, setstatus] = useState(false);

  const [products, setProducts] = useState([]);
  const [newSort, setNewSort] = useState(sorting);
  const [limit, setLimit] = useState(initialParams);
  const [loading, setLoading] = useState(false);

  //
  useEffect(() => {
    setSearchParams({ limit: limit, sort: newSort });
  }, [limit, newSort]);
 

  const LoadMore = (val) => {
    let changeBy = limit + val;
    setLimit(changeBy);
  };
  const getData = () => {
    return fetch(`http://localhost:8080/data?_limit=${limit}&sort=${newSort}`)
    .then((res) => res.json());
  };
  useEffect(() => {
    fetchData();
  }, [limit, newSort]);

  // SelectBox
  const handleSort = (e) => {
    setNewSort(e.target.value);
  };
  // SelectBox

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getData();
      setLoading(false);
      if (newSort == "lowtohigh") {
        data.sort((a, b) => {
          return b.price > a.price ? -1 : 1;
        });
      } else {
        data.sort((a, b) => {
          return a.price > b.price ? -1 : 1;
        });
      }
      setProducts(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

//   Add to cart
  const handleaddd = async (data) => {
    var newdata = {
      title: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      image: data.image,
      userId: token.id,
      rating: {
        rate: data.rating.rate,
        count: data.rating.count,
      },
    };
    // console.log(newdata)
    await axios.post(`http://localhost:8080/addtocart`, newdata).then((e) => {
      // console.log(e.data);
      alert("Item Add To Cart")
    });
  };
//   Add to cart

  return (
    <>
      <br />
      <br />
      <div className="newAndNowMain">
        <NewAndNowSideBr status={status} newSort={newSort} setNewSort={setNewSort} handleSort={handleSort} setstatus={setstatus} />
        {status ? (
            <div className="newAndNowItems">
                {products && products.map((ele) => (
                    <WIKCANDLES 
                        key={ele.id} 
                        ele={ele} 
                        title={ele.title} 
                        price={ele.price} 
                        image={ele.image} 
                        categor={ele.categor} 
                        id={ele.id}  
                        handleaddd={(e)=>handleaddd(ele)}
                    />
              ))}
            </div>
        ) : (
          <div className="withoutLoad">
            <h1>NEW and NOW</h1>
            <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw419ef091/EEA%203.jpg" alt="" />
            <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw3db9ce98/EEA%202.jpg" alt="" />
            <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc28af51e/EEA%201.jpg" alt="" />
          </div>
        )}
      </div>
      <br />
      <br />
      <center>
        {status ? 
        <button
        className="LoadMore"
        disabled={loading}
        style={{ visibility: limit >= 20 ? "hidden" : "visible" }}
        onClick={()=>LoadMore(5)}
        >
            {loading ? "Fetching..." : "LOAD MORE"}
        </button>
        : ""}
      </center>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default New_and_now;
