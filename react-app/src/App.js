import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./component/Header";
import Login from "./component/Login";
import HomePage from "./component/HomePage";
import FindIdPage from "./component/FindIdPage";
import FindPasswordPage from "./component/FindPasswordPage";
import DetailPassword from "./component/DetailPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/find_id" element={<FindIdPage/>}/>
          <Route path="/find_password" element={<FindPasswordPage/>}/>
          <Route path="/:Id/detail_password" element={<DetailPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
