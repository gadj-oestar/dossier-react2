import { useState } from "react";
import "./InputSpinner.css";

const InputSpinner = () => {
  const [count, setCount] = useState(0);

  const onclickActivate = () => {
    setCount(count + 1);
  };

  const offclickActivate = () => {
    setCount(count - 1);
  };

  return (
    <div className="InputSpinner horizontal">
      <img
        src="https://alikinvv.github.io/stepper/build/img/arrow.svg"
        className="arrow top"
        alt=""
        onClick={offclickActivate}
      />
      <div className="box">
        <div className="numbers1">{count}</div>
      </div>
      <img
        src="https://alikinvv.github.io/stepper/build/img/arrow.svg"
        className="arrow bottom"
        alt=""
        onClick={onclickActivate}
      />
    </div>
  );
};

export default InputSpinner;
