import React from "react";
import { StateContextCustom } from "../context/StateContext";
import SignboardMovie from "./SignboardMovie";
import "../style/Signboard.css";
import Clock from "./Clock";
import { Progress } from "@mantine/core";
import { RiMovie2Line } from "react-icons/Ri";

const Signboard = () => {
  const {
    state: { movies },
  } = StateContextCustom();

  return (
    <div>
      <div className="container relative mx-auto mt-16 text-center">
        <Clock />
        <div className="flex flex-wrap items-start">
          <div className="relative flex-grow flex-1">
            <div className=" absolute bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l rounded glassmorphic m-12 ml-32 w-[1030px] h-[300px]">
              <h1 className=" relative ml-[55px] m-[62px] mr-[550px]">
                <span className=" absolute logoani bg-transparent rounded-3xl border-2 border-gray-300 text-2xl mt-[2px]">
                  <RiMovie2Line />
                </span>
                <span className="  titlefont text-[7rem] text-[#ff0000]">
                  RE
                </span>
                <span className=" relative windfont text-9xl text-transparent">
                  WIND
                </span>
                <Progress
                  className=" w-[250px] mt-[-48px] ml-[3px] bg-transparent"
                  color="[#ff0000]"
                  size="xl"
                  value={100}
                  striped
                  animate
                />
                <span className=" absolute ml-[46px] mt-[-40px] spanfont text-white text-5xl">
                  FLIMBOX
                </span>
              </h1>
            </div>
          </div>
          <div className="relative flex-grow flex-1 mr-10">
            <div className=" ml-20 mr-[-35px] mt-[-84px] div1">
              <h1 className="slogan absolute ml-[-52px] mt-[190px] text-[#ff0000] text-[28px]">
                Meet the Awesomes!
              </h1>
              <div className=" list flex flex-wrap gap-2 justify-center">
                {movies?.map((movie) => {
                  return <SignboardMovie key={movie.id} {...movie} />;
                })}
                {movies?.map((movie) => {
                  return <SignboardMovie key={movie.id} {...movie} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60rem] text-gray-400 mt-[63px]">
          <div className=" flex justify-center">
            <p className=" text-base text-center mb-[17px]">
              Copyright &copy; 2023, Team REWIND. All Rights Reserved.
            </p>
          </div>
          <div className=" flex justify-center text-center">
            <p className=" text-xs w-[708px] mb-[18px]">
              This Project is a practice work of Team REWIND's Developers.
              <br />
              The content on this website, including but not limited to text,
              images, logos and other media, are protected by copyright laws and
              international treaties. Unauthorized use, reproduction,
              distribution, or modification of any content on this website is
              strictly prohibited without the express written consent of Team
              REWIND.
            </p>
          </div>
          <div className=" flex justify-center">
            <hr className=" w-[28rem] border-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signboard;
