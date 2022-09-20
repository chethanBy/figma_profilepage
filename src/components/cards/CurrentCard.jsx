import React from "react";

const CurrentCard = () => {
  return (
    <div
      className="max-w-[380px] max-h-[600px] w-full h-full  rounded my-[42px] flex justify-center items-center relative ml-[38px] py-10 hover:-translate-y-2 duration-300 transition-transform"
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "14px",
      }}
    >
      {/* current  */}
      <div
        className="absolute w-[130px] bg-[#5F0F90] h-[36px] top-[26px] right-0 flex justify-center items-center "
        style={{ borderRadius: "10px 0px 0px 10px" }}
      >
        <span className="text-white font-bold text-[26px] pb-2">current</span>
      </div>
      {/* card content */}
      <div className="flex justify-center items-center flex-col font-custom ">
        <h1 className="font-bold py-[16px] text-[28px] ">Silver</h1>
        <p className="text-3xl font-extrabold text-[48px] pb-[16px]">
          INR 1000/-
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
          <div className="w-[50px] h-[36px] flex justify-center items-center font-semibold text-[22px] text-[#EB0990] border-2 rounded-xl border-[#EB0990] border-solid">
            23
          </div>
        </div>{" "}
        <div className="flex justify-between w-[220px] text-[22px] my-4">
          <h1 className="flex justify-center items-center font-semibold">
            Payments
          </h1>
          <div className="w-[50px] h-[36px] flex justify-center items-center font-semibold text-[22px] text-[#EB0990] border-2 rounded-xl border-[#EB0990] border-solid">
            23
          </div>
        </div>{" "}
        <div className="flex justify-between w-[220px] my-4">
          <h1 className="flex justify-center items-center font-semibold text-[22px]">
            Payments
          </h1>
          <div className="w-[50px] h-[36px] flex justify-center items-center font-semibold text-[22px] text-[#EB0990] border-2 rounded-xl border-[#EB0990] border-solid">
            23
          </div>
        </div>
        {/* divider */}
        <div
          className="w-[267px] border-[3px] border-solid my-4"
          style={{ borderColor: "rgba(0, 0, 0, 0.2)rgba(0, 0, 0, 0.2)" }}
        ></div>
        {/* button */}
        <button className="w-[226px] h-[64px] border-2 border-solid border-[#ED289E] rounded-[26px] my-10 flex justify-center items-center hover:bg-slate-100 duration-300 transition-all">
          <span className="font-extrabold text-[26px]">Current</span>
        </button>
      </div>
    </div>
  );
};

export default CurrentCard;
