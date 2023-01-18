import { createContext , useState, useEffect} from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }){
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState([])
    const [cartItem, setCartitem] = useState([])

    // Set data to localy 
        let userAuth = JSON.parse(localStorage.getItem('userData')) || []
        const { auth, userData } = userAuth
    // Set data to localy

    let count = 0;
    const getData = () => {
        return fetch(`http://localhost:8080/addtocart`)
        .then((res) => res.json())
    }
    const getCoutn = async () => {
        try{
            const data = await getData();
            setCartitem(data)
        }catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCoutn();
    },[])

    
    
    const Login = (profileData) => {
        setToken(profileData)
        setIsAuth(true)
    }
    
    const Logout = () => {
        setIsAuth(false)
        setToken("")
        localStorage.removeItem('userData');
    }
    
    if(isAuth){
        let authantication = {
            userData: token,
            auth: true
        }
        localStorage.setItem("userData", JSON.stringify(authantication));
        setTimeout(function(){
            window.location.href = "/"
        },500)
    }

    // console.log(auth)
    if(auth){
        cartItem.map((ele) => {
            if(ele.userId == userData.id){
                count++
            }
        })        
        
    }


    return (
        <AuthContext.Provider value={{isAuth: auth || false, Login, Logout, token: userData, cartCount:count}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider