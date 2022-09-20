import React from "react";
import Group1 from "./svgs/Group1";
import Group2 from "./svgs/Group2";
import Group3 from "./svgs/Group3";
import Group4 from "./svgs/Group4";
import Group5 from "./svgs/Group5";
import Group6 from "./svgs/Group6";

const Sidebar = () => {
  return (
    <>
      <div className=" min-w-[93px] max-w-[93px] h-screen "></div>
      <div
        className="w-[93px] h-screen fixed flex flex-col justify-between items-center"
        style={{
          background:
            "linear-gradient(180deg, #5C108A 0%, #9D3BD9 38.02%, #550885 100%) ",
          boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.31)",
        }}
      >
        {/* flex item 1 */}
        <div className="my-10 flex flex-col gap-8">
          <Group1 />
          <Group2 />
          <Group3 />
          <Group4 />
          <Group5 />
        </div>
        {/* item2 */}
        <div className="my-10">
          <Group6 />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
