import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../Components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Response status:", res.status);
      const data = await res.json();
      console.log("Response data:", data);
      if (data.success == false) {
        dispatch(signInFailure());
        // setError(data.message);
        return;
      }
      dispatch(signInSuccess(data));
      // setError(null);
      navigate("/");
    } catch (error) {
      dispatch(signInFailure());
      console.log(error);
      // setError(error.message);
    }
  };
  return (
    <div className="bg-violet-100 min-h-screen">
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="pt-5 text-3xl text-center font-semibold">Sign In</h1>
        <form className=" pt-10 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-3"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg p-3"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 hover:shadow-lg text-lg"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-2 mt-5">
          <p className="text-lg">Don't have an Account?</p>
          <Link to={"/sign-up"}>
            <span className="text-blue-600 hover:underline text-lg">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
