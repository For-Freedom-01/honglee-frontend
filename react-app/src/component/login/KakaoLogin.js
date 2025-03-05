export default function KakaoLogin(){
  // URLSearchParams를 통해 url 주소를 가져오고
  // window.location.search를 통해 ?code의 인가코드를 가져옴
  const params = new URLSearchParams(window.location.search)
  const code = params.get("code")
  // 인가코드를 통해 access token를 발급
  return(
    <></>
  )
}