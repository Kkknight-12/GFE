import "./index.css";
/*
 * Progress bar
 * Implement a progress bar component which shows the completion
 * progress by filling the bar proportionately to the progress (a number
 * between 0-100, inclusive).
 *  */
type Props = {
  completion: string;
};
export const ProgressBar = ({ completion }: Props) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: completion }}>
        {completion}
      </div>
    </div>
  );
};