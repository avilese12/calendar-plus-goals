import { useState } from "react";
import "./styles.css";
import { GoalCard } from "./GoalCard";
import goalsData from "./assets/goals.json";

export const Goals = () => {
  const [goalsState, setGoalsState] = useState(() => {
    const stored = localStorage.getItem("goalsCompleted");
    const completedMap: Record<number, boolean> = stored
      ? JSON.parse(stored)
      : {};
    return goalsData.goals.map((goal, index) => ({
      ...goal,
      completed: completedMap[index] ?? goal.completed,
    }));
  });

  const updateGoal = (index: number, completed: boolean) => {
    setGoalsState((prev) => {
      const newGoals = [...prev];
      newGoals[index] = { ...newGoals[index], completed };
      const completedMap = {};
      newGoals.forEach((g, i) => (completedMap[i] = g.completed));
      localStorage.setItem("goalsCompleted", JSON.stringify(completedMap));
      return newGoals;
    });
  };

  return (
    <div className="goals">
      <h1 style={{ textAlign: "center" }}>Goals Before The Year Ends</h1>
      <div>
        {goalsState.map((goal, index) => (
          <GoalCard
            key={index}
            goal={goal}
            onToggle={() => updateGoal(index, !goal.completed)}
          />
        ))}
      </div>
    </div>
  );
};
