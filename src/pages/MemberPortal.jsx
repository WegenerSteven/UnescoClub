import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import '../styles/SignIn.css';

const MemberPortal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //perform sign-in logic here
    //if successful, redirect to member portal
    navigate("/member-portal");
  };
  return (
    <div className="member-portal" id="member-portal">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email-signin">Email:</label>
          <input
            type="email"
            id="email-signin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-signin">Password:</label>
          <input
            type="password"
            id="password-signin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          Sign In
        </button>
      </form>
    </div>
  );
};
export default MemberPortal;
