import "./index.scss";
export default function Login() {
  return (
    <div id="Login" className="col-12">
      <h1>Login</h1>
      <form className="email">
        <label>Username or email address <span>*</span></label>
        <input type="email" />
      </form>
      <form className="password">
        <label>Password <span>*</span></label>
        <input type="Password" />
      </form>
      <form className="remamperme">
        <input type="checkbox" />
        <label>Rememper me</label>
      </form>
      <button>LOG IN</button>
      <a href="#">Lost your password?</a>
    </div>
  );
}
