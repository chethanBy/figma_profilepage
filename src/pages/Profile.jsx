import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const Profile = () => {
  return (
    <div className="max-w-[1440px] w-full h-screen mx-auto flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Profile;
