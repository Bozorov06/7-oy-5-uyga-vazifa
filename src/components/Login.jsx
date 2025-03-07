import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../lib/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   if (dispatch(login (credentials))) {
    navigate("/");
   }
  };

  return (
    <div className="mt-10 w-[700px] mx-auto p-4">
      <h2 className="text-3xl text-primary font-bold mb-4">Kirish</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3 mb-3">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded bg-primary text-white"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          required
        />
        <input
          type="password"
          placeholder="Parol"
          className="border p-2 rounded bg-primary text-white"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          required
        />
        <button
          type="submit"
          className=" bg-cyan-600  text-white px-4 py-2 rounded"
        >
          Kirish
        </button>
      </form>
        <Link to="/register" className="text-blue-500">
           SigUp
        </Link>
    </div>
  );
};

export default Login;


