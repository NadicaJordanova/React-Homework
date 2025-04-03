

function Login({ isLoggedin }) {
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={isLoggedin}>Log in</button>
    </div>
  );
}

export default Login;
