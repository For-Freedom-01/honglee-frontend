import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function LogOut() {
  const nav = useNavigate()
  useEffect(() => {
    const handleLogout = async () =>{
      try {
        const response = await axios.post("http://13.209.151.121:8080//users/logout")
        if (response.ok) {
          window.alert("로그아웃에 성공하셨습니다다")
          nav("/")
        }
      }  catch(error){
        window.alert("로그아웃에 실패하셨습니다")
      }
    }
    handleLogout()
  },[nav])
}