import React, { FormEventHandler } from "react";
import axiosInstance from "../../axios/axiosInstance";
import { toast } from "react-toastify";

const Login = () => {
  const handleToLogin = async (e: any) => {
    e.preventDefault();
    const form = e.target as any;
    const phone = form.phone.value;
    const password = form.password.value;
    const loginData = {
      phone,
      password,
    };
    const res = (await axiosInstance.post("/auth/login", loginData)) as any;
    if (res?.success) {
      localStorage.setItem("accessToken", res?.data?.accessToken);
      toast.success(res?.message);
      window.location.href = "/";
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4 text-primary fw-bold">Login</h3>
        <form onSubmit={handleToLogin}>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter your number"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary fw-semibold">
              Login
            </button>
          </div>
          <p className="text-center mt-3 mb-0">
            <small className="text-muted">
              Don’t have an account? <a href="/register">Register</a>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
