import axios from "axios"
import {  useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SingupForm(){
    const nav = useNavigate()
    const [formData, setFormData] = useState({
        "Id":"",
        "password":"",
        "passwordCheck":"",
        "email":"",
        "friend":""
    })

    // const [option, setOption] = useState({
    //     "all":false,
    //     "overAge": false,
    //     "privatePolicy":false,
    //     "store":false,
    //     "marketing":false
    // })

    // function onOption(name){
    //     if (name==="all"){
    //         const now = !option[name]
    //         setOption({
    //             "all":now,
    //             "overAge": now,
    //             "privatePolicy":now,
    //             "store":now,
    //             "marketing":now
    //         })
    //     } else {
    //         setOption({
    //             ...option,
    //             [name]:!option[name]
    //         })
    //     }
    // }

     const isable = () =>{
        return !!(
            formData.email &&
            formData.Id && 
            formData.password && 
            formData.passwordCheck &&
            formData.password === formData.passwordCheck
        )
     }
     async function handling(e){
        e.preventDefault()
        const userId = formData.Id.trim()
        const userPassword = formData.password.trim()
        const userPasswordCheck = formData.passwordCheck.trim()
        const userEmail = formData.email.trim()
        const userFriend = formData.friend.trim()
        if (isable()){
            try{
                const response = await axios.post("http://13.209.151.121:8080//users/join",{
                    username:userId,
                    password:userPassword,
                    passwordCheck:userPasswordCheck,
                    email:userEmail,
                    friend:userFriend
                },{
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
               if (response.ok){
                window.alert("회원가입에 성공하셨습니다")
                nav("/")
               }
            } catch(error){
                window.alert('회원가입에 실패하셨습니다')
            }
        }
     }
     function onChange(e){
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
     }
  return(
    <>
        <h2>무신사 회원가입</h2>
        <h4>회원 가입</h4>
            <form onSubmit={handling}>
                <div className="Id">
                    <label>아이디</label><br/>
                    <input type="text" name="Id" id="" placeholder="아이디 입력(5~11자)" onChange={onChange} value={formData.Id}/>
                </div>
                <div>
                    <label>비밀번호</label><br/>
                    <input type="password" name="password" placeholder="비밀번호(숫자, 영문, 특수문자 조합 최소 8자)" onChange={onChange} value={formData.password} /><br/>
                    <input type="password" name="passwordCheck" placeholder="비밀번호 확인" onChange={onChange} value={formData.passwordCheck} />
                </div>
                <div className="password">
                    <label >이메일</label><br/>
                    <input  type="text" name="email"  placeholder="이메일" onChange={onChange} value={formData.email}/>
                    <p>신규 가입 혜택 (최대 5만원 쿠폰팩/인기 상품 990원 특가) 안내가 이메일로 제공됩니다. 본인의 이메일을 정확하게 입력해주세요.</p>
                </div>
                <div>
                    <label>추천인 (친구 초대 이벤트 참여 아이디)</label><br/>
                    <input name="friend" type="text" placeholder="추천인 아이디 입력" onChange={onChange} value={formData.friend}/>
                </div>
                {/* <input type="checkbox" name="all" checked={option.all} onClick={() =>onOption("all")  }/><h3>약관 전체 동의</h3>
                <input type="checkbox" name="privatePolicy" checked={option.privatePolicy} onClick={() =>onOption("privatePolicy") }/><p>개인정보 수집 이용동의(필수)</p>
                <input type="checkbox" name="store" checked={option.store} onClick={() =>onOption("store") }/><p>무신사, 무신사스토어 이용약관(필수)</p>
                <input type="checkbox" name="marketing" checked={option.marketing} onClick={() =>onOption("marketing") }/><p>마케팅 활용 및 광고성 정보 수신 동의(선택)</p>
                <input type="checkbox" name="overAge" checked={option.overAge} onClick={() =>onOption("overAge") }/><p>만 14세 미만 가입 제한(필수)</p> */}
                <button disabled={!isable()}>회원가입</button>
            </form>
    </>
  )
}
