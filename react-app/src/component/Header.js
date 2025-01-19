import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header>
      <Link to="/">
        <h2>홈페이지 </h2>
      </Link>
        <Link to="/login">Login</Link>
    </header>
  )
}