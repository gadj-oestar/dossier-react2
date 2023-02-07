import "./Switch.css";
import { useState } from "react";
import {propTypes} from "prop-types"

const Switch = ({ day }) => {
  const [time, setTime] = useState(day);
  let tab = ["switch"];
  let text = "night";

  if (time !== true) {
    tab = ["switch"];
    text = "Night";
  } else {
    tab = ["switch", "on"].join(" ");
    text = "Day";
  }
  const onSwitch = () => {
    if (time) {
      setTime(false);
    } else {
      setTime(true);
    }
  };

  return (
    <div className="container">
      <div className={tab} onClick={onSwitch}>
        {" "}
      </div>
      <label>Night</label>
    </div>
  );
};



export default Switch;
