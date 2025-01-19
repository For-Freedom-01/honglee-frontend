export default function Login(){
  return(
    <>
    <h2>Login page</h2>
    <form>
      <div className="id">
        <div>
          <label>ID</label>
        </div>
        <div>
          <input type="text" placeholder="id를 입력해주세요요" />
        </div>
      </div>
      <div className="password">
        <div>
          <label>password</label>
        </div>
        <div>
          <input type="text" placeholder="password를 입력해주세요" />
        </div>
      </div>
      <button>Login</button>
    </form>
    </>
  )
}