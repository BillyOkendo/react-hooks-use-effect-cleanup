import { clearInterval } from "timers";
import React, { useState, useEffect } from "react";

function Clock(timerId) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);



    return function cleanup(){
      clearInterval(timerId)
    }
  }, []);

  

  return <div>{time.toString()}</div>;
}

export default Clock;
