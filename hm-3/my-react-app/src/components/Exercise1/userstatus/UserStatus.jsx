import Admin from "../AdminPanel/AdminPanel";
import Login from "../login/Login";

function User({ isLoggedin, isAdmin, admin, logedin }) {
  {
    if (logedin) {
      return (
        <div>
          <h1>User</h1>
          <button onClick={isAdmin}>Admin</button>
          {admin ? <Admin /> : "Click to become an admin"}

          <button onClick={isLoggedin}>Log out</button>
          {logedin ? "" : <Login isLoggedin={isLoggedin} />}
        </div>
      );
    } else {
      return <Login isLoggedin={isLoggedin} />;
    }
  }
}

export default User;
