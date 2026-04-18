import { useState, useEffect } from "react";
import {
  getFreeTimeLeftInYearInMilliseconds,
  getTimeLeftInYearInMilliseconds,
} from "./util";
import "./styles.css";
import { Timer } from "./Timer";

export const Header = () => {
  const [initialMsLeft] = useState(() => getTimeLeftInYearInMilliseconds());
  const [initialFreeMsLeft] = useState(() =>
    getFreeTimeLeftInYearInMilliseconds(),
  );
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const msLeftInYear = initialMsLeft - elapsed;
  const msOfFreeTimeLeftInYear = initialFreeMsLeft - elapsed;
  const timeLeftInDays = Math.floor(msLeftInYear / (1000 * 60 * 60 * 24));

  const currentTime = new Date();

  return (
    <div className="header">
      <div>
        <h1>
          There are <i>{timeLeftInDays}</i> day(s) left in the year{" "}
        </h1>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>
          That is <Timer milliseconds={msLeftInYear} /> hours{" "}
        </h1>{" "}
        <h2 style={{ textAlign: "center" }}>
          But is actually
          <Timer milliseconds={msOfFreeTimeLeftInYear} /> hours of free time
        </h2>
      </div>
      <div>
        <h2> {currentTime.toLocaleDateString()}</h2>
      </div>
    </div>
  );
};
