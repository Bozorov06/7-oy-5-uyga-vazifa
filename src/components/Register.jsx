import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../lib/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);

  const handleRegister = (e) => {
    e.preventDefault();

    const userExists = users.some((user) => user.email === userData.email);
    if (userExists) {
      alert("Bu email allaqachon ro'yxatdan o'tgan!");
      return;
    }

    dispatch(signUp(userData));
    navigate("/");
  };

  return (
    <div className="mt-10 w-[700px] mx-auto p-4">
      <h2 className="text-3xl text-primary font-bold mb-4">
        Ro'yxatdan o'tish
      </h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-3 mb-3">
        <input
          type="text"
          placeholder="Ismingizni kiriting!"
          className="border p-2 rounded bg-primary text-white"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Emailni kiriting"
          className="border p-2 rounded bg-primary text-white"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Parolni kiriting"
          className="border p-2 rounded bg-primary text-white"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Ro'yxatdan o'tish
        </button>
      </form>
        <Link to="/login" className="text-blue-500">
          SigIn
        </Link>
    </div>
  );
};

export default Register;
