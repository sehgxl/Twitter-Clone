import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LeftNav from "./leftNavigation";
import MainSection from "./mainSection";
import RightSection from "./rightSection";
const loggedIn = [];
const Dashboard = (props) => {
  const location = useLocation();
  const { username } = location.state;
  loggedIn.push(username);
  localStorage.setItem("LoggedIn", JSON.stringify(loggedIn));

  return (
    <section className="grid grid-cols-[0.3fr_0.4fr_0.3fr] min-h-screen">
      <LeftNav username={username} />
      <MainSection username={username} />
      <RightSection />
    </section>
  );
};

export default Dashboard;
