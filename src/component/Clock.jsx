import React, { useEffect, useState } from "react";
import "../style/clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(time.toLocaleDateString());
  const [meridiem, setMeridiem] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const timeString = date
        .toLocaleTimeString("en-AU")
        .replace(/([\d]+:[\d]+:[\d]+) /, " ");
      setMeridiem(timeString);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setDate(time.toLocaleDateString("en-GB"));
  }, [time]);

  return (
    <div>
      <h1 className=" z-10 flex hrfont absolute ml-[129px] text-[#ff0000]">
        <span className=" border-2 rounded border-[#b0f4ff] w-[100px] h-[43px] relative mt-[1px] openfont text-5xl">
          OPEN
        </span>
        &nbsp; &nbsp;&nbsp;
        {time.toLocaleTimeString("en-GB")}
        {meridiem}
        &nbsp;&nbsp;&nbsp;
        {date}
      </h1>
      <h1 className=" flex hrfont absolute ml-[129px] text-[rgba(107,114,128,0.75)]">
        <span className=" border-2 rounded w-[100px] h-[43px] shadow-[0_0_100px_#36baf7,0px_0px_3px_#3a0866,0_0_60px_#0084d1] relative tracking-normal mt-[1px] openfont text-[#ff0000] text-5xl">
          OPEN
        </span>
        &nbsp;&nbsp;&nbsp; 88 88 88 88 &nbsp;&nbsp;88 88 8888
      </h1>
    </div>
  );
};

export default Clock;
