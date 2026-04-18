import { useEffect, useState } from "react";

interface TimerProps {
  milliseconds: number;
}

export const Timer = ({ milliseconds }: TimerProps) => {
  const timeLeftInHours = Math.floor(milliseconds / (1000 * 60 * 60));
  const remainderMinutes = Math.floor(
    (milliseconds % (1000 * 60 * 60)) / (1000 * 60),
  );
  const remainderSeconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  return (
    <i>
      {timeLeftInHours.toString().padStart(2, "0")}:
      {remainderMinutes.toString().padStart(2, "0")}:
      {remainderSeconds.toString().padStart(2, "0")}
    </i>
  );
};
