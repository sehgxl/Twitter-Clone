import React, { useEffect, useState } from "react";
import users from "../users";
import { ReactComponent as TWIcon } from "../assets/tw.svg";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [Submit, setSubmit] = useState(false);
  const [NameAplha, setNameAplha] = useState(false);
  const [NameExists, setNameExists] = useState(false);
  const [PWLength, setPWLength] = useState(false);
  const allUsers = JSON.parse(localStorage.getItem("allUsers"));
  const storeData = () => {
    const regUsername = /^[a-z0-9_]+$/;
    if (!(user.username === "" && user.password === "")) {
      if (
        //first check for user already exist or not
        //second check for alphanumeric name or not
        //third check for pw lenght >=8 or not
        !allUsers.find((storedUser) => storedUser.username === user.username) &&
        regUsername.test(user.username) &&
        user.password.length >= 8
      ) {
        users.push(user);
        localStorage.setItem("allUsers", JSON.stringify(users));
        console.log("register success");
        console.log("allusers", users);

        Navigate("/");
      } else {
        if (regUsername.test(user.username) === false) {
          setNameAplha(true);
          setNameExists(false);
          console.log("name not aplha numeric");
        } else if (
          users.find((storedUser) => storedUser.username === user.username)
        ) {
          setNameAplha(false);
          setNameExists(true);
          console.log("username already occupied");
        } else if (user.password.length < 8) {
          setNameAplha(false);
          setNameExists(false);
          setPWLength(true);
          console.log("pw must be >=8");
        }
      }
      return () => {
        setUser((oldVal) => {
          return { ...oldVal, username: "", password: "" };
        });
      };
    }
  };

  useEffect(storeData, [Submit]);
  return (
    <section className="grid grid-cols-2 min-h-screen ">
      <section className="flex justify-center items-center bg-[#1A8CD8]">
        <TWIcon className="w-80 fill-white" />
      </section>
      <section className="px-10 py-5 flex flex-col items-start justify-start gap-5">
        <h1 className="text-6xl font-bold font-sans mt-20 my-5">Register</h1>
        <div className="flex items-center justify-start gap-2">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="border px-3 py-2 border-[#1A8CD8]  rounded text-xl"
            value={user.username}
            onChange={(e) =>
              setUser((oldVal) => {
                return { ...oldVal, username: e.target.value };
              })
            }
          />
          {NameAplha ? (
            <span className="text-red-400 text-lg">
              * Username not alphanumeric
            </span>
          ) : null}
          {NameExists ? (
            <span className="text-red-400 text-lg">
              * Username already occupied
            </span>
          ) : null}
        </div>

        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="border px-3 py-2 border-[#1A8CD8]  rounded text-xl"
            value={user.password}
            onChange={(e) =>
              setUser((oldVal) => {
                return { ...oldVal, password: e.target.value };
              })
            }
          />
          {PWLength ? (
            <span className="text-red-400 text-lg">
              * Password length must be {">"}= 8
            </span>
          ) : null}
        </div>
        <button
          className="text-lg bg-[#1A8CD8] text-white px-3 py-1 font-bold rounded border border-[#1A8CD8] hover:bg-white hover:text-[#1A8CD8]"
          onClick={() => {
            setSubmit((oldVal) => !oldVal);
          }}
        >
          Register
        </button>
      </section>
    </section>
  );
};

export default Register;
