import { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const registerUser = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.message);
      }

      setError("");
      setName("");
      setEmail("");
      setPassword("");
      toast.success("Registered succesfully. Check your email for activation!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={registerUser}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className="signup-button">Sign up</button>
      </form>

      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default RegisterForm;
