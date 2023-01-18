import React from "react"
import "../css/home.css"
import Footer from '../components/footer';
function Home(){


    const [loading, setLoading] = React.useState(false)

    const grid = [
        {img: "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwda4e156a/%281%29DDA-49.jpg", title2: "SHOP NEW ARRIVALS", title: "Chill out with the season's coolest Aromatherapy essentials."},
        {img: "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9438e8cf/%281%29DDA-47.jpg", title2: "SHOP AROMATHERAPY", title : "Give love with special something's for everyone on your list."},
        {img: "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw89d6b5c8/%281%29DDA-48.jpg", title2: "SHOP NEW ARRIVALS", title : "Pro tip: no holiday happening should stop at the sink."},
        {img: "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw99890c17/DIA%2046.jpg", title2: "SHOP WALLFLOWERS", title: "Gift everyone the joy of 24/7 magical, holiday fragrance."}
    ]

    const shopByCategory = [
        {img: "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw73b50260/DDA%2052.jpg", title: "BODY WASH"},
        {img: "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw250ddf0c/DDA%2053.jpg", title: "3-WICK CANDLES"},
        {img: "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw7715780c/DDA%2054.jpg", title: "WALLFLOWERS REFILLS"},
        {img: "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw708a6131/DDA%2057.jpg", title: "HAND SOAPS"},
        {img: "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw354ec6cc/DDA%2055.jpg", title: "AROMATHERAPY"},
        {img: "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw04fd48cb/DDA%2090.jpg", title: "MEN'S"},
    ]

    setTimeout(()=>{
        setLoading(true);
    },500)

    return !loading ? <h1>Loading...</h1> : (
    
        <div className="homeMain">

            <div className="homeImgBx">
                <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw152c34e2/DEA%2040.jpg" alt="" />
            </div>
            <div className="homeImgBx">
                <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw62afbb84/DDA%2042.jpg" alt="" />
            </div>
            <div className="homeImgBx">
                <img  src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwbe17dd65/DDA%2044.gif" alt="" />
            </div>
            
            <div className="homeGrid">
                {grid.map((ele) => (
                    <div key={ele.img} className="grid">
                        <img src={ele.img} alt="" />
                        <p>{ele.title}</p>
                        <p style={{fontSize: "12px"}}><b>{ele.title2}</b></p>
                    </div>
                ))}
            </div>

            <div className="homeImgBx">
                <img  src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dweae20822/DDA%2050.jpg" alt="" />
            </div>

            <div className="homeShopCategory">
                <h2>SHOP BY CATEGORY</h2>
            </div>

            <div className="homeCategory">
                {shopByCategory.map((ele) => (
                    <div key={ele.img} className="Homecate">
                        <img src={ele.img} alt="" />
                        <p>{ele.title}</p>
                    </div>
                ))}
            </div>

            <div className="homeContent">
                <h2>Bath & Body Works</h2>
                <p>Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care, we make finding your perfect something special a happy-memory-making experience. Searching for new seasonal creations or your favorite favourite scents? We’ve got you covered there, too. Oh! And while you're browsing, shop our latest & greatest selection of lotions,soaps and candles!</p>
            </div>

            <Footer />
        </div>
    )
}

export default Home