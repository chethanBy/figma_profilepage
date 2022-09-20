import React from "react";
import CurrentCard from "./cards/CurrentCard";
import UpdateCard from "./cards/UpdateCard";
import avatar from "../assets/Ellipse1.png";
import Hamburger from "./svgs/Hamburger";

const Main = () => {
  return (
    <div className="flex h-screen w-full flex-col overflow-x-hidden  max-w-[1347px] relative">
      <Hamburger />
      {/* item1 */}
      <div
        className="h-screen w-full"
        style={{
          maxHeight: "242px",
        }}
      >
        {/* item 1 */}
        <div className="flex mt-[45px] ml-[45px]">
          {/* avatar */}
          <div className="w-[140px] h-[140px]">
            <img src={avatar} alt="avatar" />
          </div>
          {/* name */}
          <div className="ml-[30px]">
            {/* Main name */}
            <h1 className="text-[47px] font-bold">Chethan BY</h1>
            {/* para */}
            <p className="text-[17px] text-[#8E8888] font-medium">
              This is you profile page
            </p>
            <div className="w-full flex justify-evenly mt-11 gap-[140px] text-[17px] font-semibold ">
              <div className="cursor-pointer">My Profile</div>
              <div className="cursor-pointer">Payments</div>
              <div className="border-b-4 border-[#5C0F8B] cursor-pointer">
                Subscriptions
              </div>
              <div className="cursor-pointer">Settings</div>
            </div>
          </div>
        </div>
      </div>
      {/* item2 */}
      <div
        className=" w-full bg-red h-full bg-[#F6F6F9] flex gap-[68px]  "
        style={{
          maxHeight: "calc(100%-242px)",
        }}
      >
        <CurrentCard />
        <UpdateCard end={false} amount={1600} title="GOLD" />
        <UpdateCard amount={2699} title="PLATINUM" />
      </div>
    </div>
  );
};

export default Main;
