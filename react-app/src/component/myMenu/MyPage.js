import { Link } from "react-router-dom"
export default function MyPage({loginState}){
  return(
  <div>
    <header>마이</header>

    <div>
    {!loginState && (
      <div>
        <p>무신사 회원은 최대 4% 적립, 전 상품 무료배송 혜택</p>
        <Link to="/login">Login</Link>
      </div>
      )}
    </div>
    <div>
      {loginState && <Link to="/logout">logout</Link>}
    </div>
  </div>
  )
}