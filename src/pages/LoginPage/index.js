import LoginForm from "../../components/LoginForm";
import "./style.css";

const LoginPage = () => {
  return (
    <section className="login-container">
      <h2>Log In</h2>

      <LoginForm />
    </section>
  );
};

export default LoginPage;
