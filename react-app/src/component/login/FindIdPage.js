import { useState } from "react"

export default function FindIdPage(){
  const [radioOption,setRadioOption] = useState("")

  function selectOption(e){
    setRadioOption(e.target.value)
  }
  return(
    <div>
      <h2> 아이디 찾기</h2>
      <form>
        <input type="radio" name="id_radio" value="phone" onChange={selectOption}/> 휴대폰<br/>
          {(radioOption === "phone") && 
          (<div>
            <input type="text" placeholder="이름"/><br/>
            <input type="text" placeholder="휴대폰 번호"/>
          </div>)}
        <input type="radio" name="id_radio" value="email"  onChange={selectOption}/> 이메일<br/>
        {(radioOption === "email") && 
          (<div>
            <input type="text" placeholder="이메일"/>
          </div>)}
        <input type="radio" name="id_radio" value="self"  onChange={selectOption}/> 본인인증<br/>
        {(radioOption === "self") && 
         (<p>본인 명의 휴대폰으로 찾는 방법입니다.
            (본인인증을 완료한 아이디만 가능)</p>)}
        <br/><button>아이디 찾기기</button>
      </form>
    </div>
  )
}