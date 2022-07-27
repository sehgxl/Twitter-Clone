import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as TWIcon } from "../assets/tw.svg";
const Login = () => {
  const Navigate = useNavigate();
  const [Submit, setSubmit] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  const allUsers = JSON.parse(localStorage.getItem("allUsers"));
  const [UserNotFound, setUserNotFound] = useState(false);
  const [UserPwWrong, setUserPwWrong] = useState(false);
  const usernameCheck = allUsers.find(
    (storedUser) => storedUser.username === user.username
  );
  const passwordCheck = allUsers.find(
    (storedUser) => storedUser.password === user.password
  );
  function checkLogin() {
    console.log("entered stuff", user);
    if (usernameCheck && passwordCheck) {
      console.log("succes");
      Navigate("/dashboard", { state: user });
      setUserNotFound(false);
      setUserPwWrong(false);
      ///means user && pw matches
    } else {
      ///this means user or pw do not match, we dont know

      console.log("wrooooonggg");

      if (!usernameCheck) {
        //this if is to check username exists or not
        console.log("username not found");
        setUserNotFound(true);
      } else {
        //this is if user exists but pw wrong || this is the only possible validation error after checking if user exists
        setUserNotFound(false);
        setUserPwWrong(true);
        console.log("username found , pw do not match");
      }
    }
  }
  useEffect(() => {
    if (!(user.username === "" && user.password === "")) {
      checkLogin();
    }

    return () => {
      //this runs before the next rerender
      if (usernameCheck) {
        setUser((oldValue) => {
          return { ...oldValue, password: "" };
        });
      } else {
        console.log("warninghgg");
        setUser((oldValue) => {
          return { ...oldValue, username: "", password: "" };
        });
      }
    };
  }, [Submit]);

  return (
    <section className="grid grid-cols-2 min-h-screen ">
      <section className="flex justify-center items-center bg-[#1A8CD8]">
        <TWIcon className="w-80 fill-white" />
      </section>
      <section className="px-10 py-5 flex flex-col items-start justify-start gap-5">
        <h1 className="text-6xl font-bold font-sans mt-20 my-5">
          Login into <br /> your account
        </h1>

        <div className="flex items-center justify-start gap-2">
          <input
            type="text"
            className="border px-3 py-2 border-[#1A8CD8]  rounded text-xl"
            placeholder="Username"
            value={user.username}
            onChange={(e) =>
              setUser((oldVal) => {
                return { ...oldVal, username: e.target.value };
              })
            }
          />
          {UserNotFound ? (
            <span className="text-red-400 text-lg">
              * Username does not exist.
            </span>
          ) : null}
        </div>

        <div className="flex items-center justify-start gap-2">
          <input
            type="password"
            name="password"
            id="password"
            className="border px-3 py-2 border-[#1A8CD8] rounded text-xl"
            placeholder="Password"
            value={user.password}
            onChange={(e) =>
              setUser((oldVal) => {
                return { ...oldVal, password: e.target.value };
              })
            }
          />
          {UserPwWrong ? (
            <span className="text-red-400 text-lg">* Wrong Password</span>
          ) : null}
        </div>

        <button
          className="text-lg bg-[#1A8CD8] text-white px-3 py-1 font-bold rounded border border-[#1A8CD8] hover:bg-white hover:text-[#1A8CD8]"
          onClick={() => {
            setSubmit((oldVal) => !oldVal);
          }}
        >
          Login
        </button>
        <p className="text-lg">
          Don't have an account already?{" "}
          <span
            className="text-[#1A8CD8] hover:underline hover:cursor-pointer"
            onClick={() => {
              Navigate("/register");
            }}
          >
            Register
          </span>{" "}
          here!{" "}
        </p>
      </section>
    </section>
  );
};

export default Login;
