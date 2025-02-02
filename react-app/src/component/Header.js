
import { Link } from "react-router-dom";

export default function Header({loginState}){
  return(
    <header>
      <Link to="/">
        <span>홈</span> 
      </Link>  
      {loginState ? (
        <Link to="logout">logout</Link>
      ) : (<Link to="/login">Login</Link>)}
        
    </header>
  )
}