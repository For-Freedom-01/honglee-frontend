import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
  const [loginState,setLoginState] = useState(false)

  useEffect(() => {
    checkLoginStates()
  },[])

  const checkLoginStates = () => {
    const token = localStorage.getItem("token")
    if (token) {
      setLoginState(true)
    }
  }

  return(
    <header>
      <Link to="/">
        <h2>홈페이지 </h2>
      </Link>
      {loginState ? (
        <Link to="logout">logout</Link>
      ) : (<Link to="/login">Login</Link>)}
        
    </header>
  )
}