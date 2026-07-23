import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Registered:", form);

    // later: send to backend

    navigate("/login");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <br /><br />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}