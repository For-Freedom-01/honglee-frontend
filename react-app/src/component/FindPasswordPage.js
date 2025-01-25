import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function FindPasswordPage(){
  const nav = useNavigate()
  const Id = useRef("")
  function onNext(e){
    // e.preventDefaut()
    const userId = Id.current.value
    nav(`/${userId}/detail_password`)
  }
  return(
    <form onSubmit={onNext}>
      <p>비밀번호를 찾으려는 아이디</p>
      <input type="text" ref={Id} />
        <button>다음</button>
    </form>
  )
}