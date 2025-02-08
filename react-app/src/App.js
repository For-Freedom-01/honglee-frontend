import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./component/Header";
import Login from "./component/Login";
import HomePage from "./component/HomePage";
import FindIdPage from "./component/FindIdPage";
import FindPasswordPage from "./component/FindPasswordPage";
import DetailPassword from "./component/DetailPassword";
import KakaoLogin from "./component/KakaoLogin";
import SingupPage from "./component/SingupPage";
import AgreeStore from "./component/agree/AgreeStore";
import AgreeAd from "./component/agree/AgreeAd";
import AgreeMarketing from "./component/agree/AgreeMarketing";
import SingupForm from "./component/SignupForm";
import AgreePersonInfo from "./component/agree/AgreePersonInfo";
import LogOut from "./component/Logout";
import { useEffect, useState } from "react";
import PrivateRoute from "./hook/PrivateRoute";

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

          {/* 로그인 시에서만 이동 가능한 페이지 */}
          <Route path="/logout" element={<PrivateRoute isLogin={isLogin}><LogOut/></PrivateRoute>}/>

        </Routes>
        <Header loginState={isLogin}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
