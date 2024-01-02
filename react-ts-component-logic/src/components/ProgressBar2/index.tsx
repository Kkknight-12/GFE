import { useEffect, useState } from "react";
import "../ProgressBar/index.css";

/*
 * Progress bar
 * Implement a progress bar component which shows the completion
 * progress by filling the bar proportionately to the progress (a number
 * between 0-100, inclusive).
 *  */
type Props = {
  completion: string;
};
export const ProgressBar2 = ({ completion }: Props) => {
  const [state, setState] = useState(0);
  const [result] = completion.split("%");

  useEffect(() => {
    console.log("Number(completion) ", Number(result));
    if (state <= Number(result)) {
      console.log("state ))) ", state);
      setTimeout(() => {
        setState((prevState) => prevState + 10);
      }, 1000);
    }
  }, [state]);

  console.log("completion ", completion);

  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: state }}>
        {`${state} %`}
      </div>
    </div>
  );
};