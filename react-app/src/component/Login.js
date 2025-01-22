import { useRef } from "react"
import {Link, useNavigate } from "react-router-dom"

export default function Login(){
  const refId = useRef(null)
  const refPassword = useRef(null)
  const nav = useNavigate()
  

  
  async function onLogin(e){
    e.preventDefault()
    const id = refId.current.value.trim()
    const password = refPassword.current.value.trim()
    console.log(id,password)
    await fetch(`http://localhost:3001/userInfo?id=${id}&password=${password}`)
    .then(data=> {
      if (!data.ok) {
        window.alert("id 또는 password를 확인해 주세요")
      } else if (data.length === 0) {
        window.alert("id 또는 password를 확인해 주세요")
      }else {
        console.log("res",data)
        window.alert("로그인에 성공하셨습니다")
        nav('/')
      }
    })
    .catch(error => console.log(error))
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
    <Link to="/find_id">아이디 찾기</Link>
    </>
  )
}