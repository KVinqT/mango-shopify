import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>Login Page</div>
      <Link to="/sign-up">
        <p>Go to sign-up page</p>
      </Link>
    </div>
  );
};

export default Login;
