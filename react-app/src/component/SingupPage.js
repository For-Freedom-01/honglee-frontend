import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
export default function SingupPage(){
  const nav = useNavigate()
  const [state, setState] = useState({
    allCkeck:false,
    overAge:false,
    store:false,
    marketing:false,
    ad:false,
  })

  // 전체 동의를 누를시 모든 checkbox의 옵션들이 선택되게 설정정
  function allHandle(){
    const isChecked = !state.allCkeck
    setState({
      allCkeck:isChecked,
    overAge:isChecked,
    store:isChecked,
    marketing:isChecked,
    ad:isChecked,
    })
  }

// 하나씩 checkbox 옵션을 선택시 누른 옵션의 속성를 동적으로 변경
 function HandleCheck(name){
    setState({
      ...state,
      [name]:!state[name]
    })
 }

  // 필수 옵션을 선택했을 경우에만 제출 버튼을 누를 수 있게 설정정
  const canSubmit = state.overAge && state.store
  
  function agreeSubmit(e){
    e.preventDefault()
    nav("/signup_form")
  }
  return(
    <>
    <h2>환영합니다 <br/>
      무신사에 가입하시려면 약관에 동의해 주세요</h2>
    <form onSubmit={agreeSubmit}>
      <input type="checkbox" name="allCheck" checked={state.allCheck} onClick={allHandle}/>
      <p>약관 전체 동의하기(선택 동의 포함)<br/>
      선택 사항에 대한 동의를 거부하는 경우에도 서비스는 이용가능합니다</p>
      <input type="checkbox" name="overAge" checked={state.overAge} onClick={() => HandleCheck("overAge")} />
      <p>만 14세 이상입니다 (필수)</p>
      <input type="checkbox" name="store" checked={state.store} onClick={() => HandleCheck("store")}/>
      <p>무신사, 무신사 스토어 이용 약관관 (필수)</p>
      <Link to = "agree_store" target="_blank"><p>자세히</p></Link>
      <input type="checkbox" name="marketing" checked={state.marketing} onClick={() => HandleCheck("marketing")}/>
      <p>마케팅 목적의 개인정부 수집 및 이용 동의 (선택)</p>
      <Link to="./agree_ad" target="_blank"><p>자세히</p></Link>
      <input type="checkbox" name="ad" checked={state.ad} onClick={() => HandleCheck("ad")}/>
      <p>광고성 정보 수신 동의의(선택)</p>
      <Link to="./agree_marketing" target="_blank"><p>자세히</p></Link>
      <p>정보주체의 개인정보 및 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여 안전하게 관리하고 있습니다.</p>
      <p>자세한 사항은 <Link target="_blank">개인정보처리방침</Link>에서 확인할 수 있습니다</p>
      <button disabled={!canSubmit}>동의하고 본인인증하기</button>
    </form>
    </>
  )
}