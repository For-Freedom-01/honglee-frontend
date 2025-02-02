import {BrowserRouter,Route,Routes, useNavigate} from "react-router-dom"
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

function App() {
  const [loginState, setLoginState] = useState()
  useEffect(()=> {
    checkLoginStates()
  },[])

  const checkLoginStates = () => {
    const token = localStorage.getItem("token")
    if  (token) {
      setLoginState(true)
    }
  }
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<LogOut/>}/>
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



        </Routes>
        <Header loginState={loginState}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
