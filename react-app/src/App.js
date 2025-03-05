import {BrowserRouter,Route,Routes} from "react-router-dom"
import Footer from "./component/Footer";
import Login from "./component/login/Login";
import HomePage from "./component/HomePage";
import FindPasswordPage from "./component/login/FindPasswordPage";
import FindIdPage from "./component/login/FindIdPage";
import DetailPassword from "./component/login/DetailPassword";
import KakaoLogin from "./component/login/KakaoLogin";
import SingupPage from "./component/login/SingupPage";
import AgreeStore from "./component/agree/AgreeStore";
import AgreeAd from "./component/agree/AgreeAd";
import AgreeMarketing from "./component/agree/AgreeMarketing";
import AgreePersonInfo from "./component/agree/AgreePersonInfo";
import SingupForm from "./component/login/SignupForm";
import LogOut from "./component/login/Logout";
import { useEffect, useState } from "react";
import PrivateRoute from "./hook/PrivateRoute";
import MyPage from "./component/myMenu/MyPage";

function App() {
  const [isLogin, setLogin] = useState(false)

  useEffect(() => {
    const storageLogin = sessionStorage.getItem("isLogin")
    if (storageLogin === "true") {
      setLogin(true)
    } else {
      setLogin(false)
    }
  },[])
  
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login setLogin={setLogin}/>}/>
          <Route path="/find_id" element={<FindIdPage/>}/>
          <Route path="/find_password" element={<FindPasswordPage/>}/>
          <Route path="/:Id/detail_password" element={<DetailPassword/>}/>
          <Route path="/kakao_login" element={<KakaoLogin/>}/>
          <Route path="/signup" element={<SingupPage/>}/>
              <Route path="signup/agree_store" element={<AgreeStore/>}/>
              <Route path="signup/agree_ad" element={<AgreeAd/>}/>
              <Route path="signup/agree_marketing" element={<AgreeMarketing/>}/>
              <Route path="signup/agree_personinfo" element={<AgreePersonInfo/>}/>
              <Route path="signup/signupForm" element={<SingupForm/>}/>

          <Route path="/my_page" element={<MyPage loginState={isLogin} />} />

          
          {/* 로그인 시에서만 이동 가능한 페이지 */}
          <Route path="/logout" element={<PrivateRoute isLogin={isLogin}><LogOut/></PrivateRoute>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
