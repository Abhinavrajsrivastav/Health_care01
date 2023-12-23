import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../Components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
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
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div className="bg-violet-100 min-h-screen">
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="pt-5 text-3xl text-center font-semibold">Sign Up</h1>
        <form className="pt-10 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User Name"
            className="border rounded-lg p-3"
            id="userName"
            onChange={handleChange}
          />
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
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-2 mt-5">
          <p className="text-lg">Already have an Account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-600 text-lg hover:underline">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
