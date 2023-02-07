import { useState } from "react";
import "./InputSpinner.css";

const InputSpinner = () => {
  const [count, setCount] = useState(0);

  const onUpDate = (number) => {
    setCount(count + number);
  };

  

  return (
    <div className="InputSpinner horizontal">
      <img
        src="https://alikinvv.github.io/stepper/build/img/arrow.svg"
        className="arrow top"
        alt=""
        onClick={(event) =>{onUpDate(-1  )}}
      />
      <div className="box">
        <div className="numbers1">{count}</div>
      </div>
      <img
        src="https://alikinvv.github.io/stepper/build/img/arrow.svg"
        className="arrow bottom"
        alt=""
        onClick={ (event)=>{ onUpDate(1)}}
      />
    </div>
  );
};

export default InputSpinner;
