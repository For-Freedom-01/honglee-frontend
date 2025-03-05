
import { Link } from "react-router-dom";

export default function Footer(){
  return(
    <header>
      <Link to="/"><span>홈</span> </Link>  
      <Link to="/my_page"><span>마이</span></Link>
    </header>
  )
}