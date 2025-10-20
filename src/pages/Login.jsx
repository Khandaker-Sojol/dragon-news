import React, { use } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target);

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    // signIn User
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("User Login successfully", {
          position: "top-center",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // const googleProvider = new GoogleAuthProvider();

  // signInWithPopup(auth, googleProvider)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-1/4 shrink-0 shadow-2xl px-10">
        <h1 className="text-[#403F3F] font-semibold text-4xl text-center py-12 border-b border-[#E7E7E7]">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <div className="text-center my-4 ">
            <h3 className="text-[#706F6F] font-semibold">
              Don’t Have An Account ?{" "}
              <Link className="text-[#f96d65]" to="/auth/register">
                Register
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
