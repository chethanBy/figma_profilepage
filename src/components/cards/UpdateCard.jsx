import React from "react";

const UpdateCard = ({ end, amount, title }) => {
  return (
    <div
      className={
        end
          ? `max-w-[380px] w-full rounded my-[42px]  flex justify-center items-center relative mr-[33px] max-h-[640px] h-full py-[20px] hover:-translate-y-2 duration-300 transition-transform`
          : `max-w-[380px] w-full rounded my-[42px]  flex justify-center items-center relative max-h-[640px] h-full py-[20px] hover:-translate-y-2 duration-300 transition-transform`
      }
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "14px",
      }}
    >
      {/* card content */}
      <div className="flex justify-center items-center flex-col font-custom ">
        <h1 className="font-bold py-[16px] text-[28px]">{title}</h1>
        <p className="text-3xl font-extrabold text-[48px] pb-[16px]">
          INR {amount}/-
        </p>
        <p className="max-w-[271px] text-center font-normal text-[#000000] text-[22px] my-8">
          This is the best plan for people who are starting point
        </p>
        <div
          className="w-[267px] border-[3px] border-solid"
          style={{ borderColor: "rgba(0, 0, 0, 0.2)rgba(0, 0, 0, 0.2)" }}
        ></div>
        <div className="flex justify-between w-[220px] my-4">
          <h1 className="flex justify-center items-center font-semibold text-[22px]">
            Payments
          </h1>
          <div className="w-[50px] h-[36px] flex justify-center items-center font-semibold text-[22px] text-[#400962] rounded-xl bg-[#B389CD]/75">
            23
          </div>
        </div>
        <div className="flex justify-between w-[220px] text-[22px] my-4">
          <h1 className="flex justify-center items-center font-semibold">
            Payments
          </h1>
          <div className="w-[50px] h-[36px] flex justify-center items-center font-semibold text-[22px] text-[#400962] rounded-xl bg-[#B389CD]/75">
            23
          </div>
        </div>{" "}
        <div className="flex justify-between w-[220px] my-4">
          <h1 className="flex justify-center items-center font-semibold text-[22px] ">
            Payments
          </h1>
          <div className="w-[50px] h-[36px] flex justify-center items-center font-semibold text-[22px] text-[#400962] rounded-xl bg-[#B389CD]/75">
            23
          </div>
        </div>
        {/* divider */}
        <div
          className="w-[267px] border-[3px] border-solid my-4"
          style={{ borderColor: "rgba(0, 0, 0, 0.2)rgba(0, 0, 0, 0.2)" }}
        ></div>
        {/* button */}
        <button className="w-[226px] h-[64px] bg-[#5F0F90] rounded-[26px] my-10 flex justify-center items-center hover:bg-[#5F0F90]/75 duration-300 transition-all">
          <span className="font-extrabold text-[26px] text-white">Upgrade</span>
        </button>
      </div>
    </div>
  );
};

export default UpdateCard;
