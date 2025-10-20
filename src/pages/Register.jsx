import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const checked = e.target.checkbox.checked;
    console.log({ email, password, photo, name, checked });

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      const passErrorMsg =
        "Password must be at least 8 characters long, include uppercase, lowercase, number & special character.";
      setPassError(passErrorMsg);
      return;
    }
    if (!checked) {
      // toast.error("You must accept the Terms & Conditions.", {
      //   position: "top-center",
      // });
      setCheckboxError("You must accept the Terms & Conditions.");
      return;
    }

    // reset Error
    setPassError("");
    setError("");
    setCheckboxError("");

    // Create User
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        toast.success("User Created Successfully", {
          position: "top-center",
        });
        e.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 shrink-0 shadow-2xl px-10">
        <h1 className="text-[#403F3F] font-semibold text-4xl text-center py-12 border-b border-[#E7E7E7]">
          Register your account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
              name="name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="enter yor photo URL"
              name="photo"
            />
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
            {passError && (
              <p className="text-red-500 text-sm w-[330px] mt-2">{passError}</p>
            )}

            {error && <p className="text-red-500 text-sm w-[330px]">{error}</p>}

            <div className="flex gap-2 text-[16px] pt-1">
              <input
                type="checkbox"
                name="checkbox"
                defaultChecked
                className="checkbox-md"
              />
              <p className="text-[#706F6F] ">
                Accept our{" "}
                <Link className="font-semibold">Term & Conditions</Link>
              </p>
            </div>
            {checkboxError && (
              <p className="text-red-500 text-sm w-[330px] mt-2">
                {checkboxError}
              </p>
            )}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
          <div className="text-center my-4 ">
            <h3 className="text-[#706F6F] font-semibold">
              Already Have An Account ?{" "}
              <Link className="text-[#f96d65]" to="/auth/login">
                Login
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
