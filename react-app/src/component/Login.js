import { useRef } from "react"
import {Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function Login(){
  const refId = useRef("")
  const refPassword = useRef("")
  const nav = useNavigate()
  
  async function onLogin(e){
    e.preventDefault()
    const id = refId.current.value.trim()
    const password = refPassword.current.value.trim()
    console.log(id,password)
    try{
      const response = await axios.post(`http://localhost:3001/userInfo`,{
        ID:id,
        password:password
      },{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials:true,
      })

      const { data } = response
      if (!data.success) {
        window.alert("ID 또는 비밀번호를 확인해 주세요")
      } else {
        window.alert("로그인에 성공하셨습니다")
        nav("/")
      }
  } catch(error){
  window.alert("로그인 중 문제가 발생했습니다")
  console.log(error)
  }
  }
  return(
    <>
    <h2>Login page</h2>
    <form onSubmit={onLogin}>
      <div className="id">
        <div>
          <label>ID</label>
        </div>
        <div>
          <input type="text" placeholder="id를 입력해주세요요" ref={refId}/>
        </div>
      </div>
      <div className="password">
        <div>
          <label>password</label>
        </div>
        <div>
          <input type="password" placeholder="password를 입력해주세요" ref={refPassword}/>
        </div>
      </div>
      <button>Login</button>
    </form>
    <Link to="/find_id">아이디 찾기</Link> | <Link to="/find_password">비밀번호 찾기</Link>
    </>
  )
}