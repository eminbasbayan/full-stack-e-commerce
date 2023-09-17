import Login from "./Login";
import Register from "./Register";
import "./Auth.css";

const Auth = () => {
  return (
    <section className="account-page">
      <div className="container">
        <div className="account-wrapper">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  );
};

export default Auth;
