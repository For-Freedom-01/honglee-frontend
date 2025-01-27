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
function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/find_id" element={<FindIdPage/>}/>
          <Route path="/find_password" element={<FindPasswordPage/>}/>
          <Route path="/:Id/detail_password" element={<DetailPassword/>}/>
          <Route path="/kakao_login" element={<KakaoLogin/>}/>
          <Route path="/signup" element={<SingupPage/>}/>
              <Route path="signup/agree_store" element={<AgreeStore/>}/>
              <Route path="signup/agree_ad" element={<AgreeAd/>}/>
              <Route path="signup/agree_marketing" element={<AgreeMarketing/>}/>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
