import "./styles.css";

export const GoalCard = ({
  goal,
  onToggle,
}: {
  goal: { goal: string; completed: boolean };
  onToggle: () => void;
}) => {
  return (
    <div className="goal-card">
      <p
        className={`strikethrough ${goal.completed ? "struck" : ""}`}
        onClick={onToggle}
      >
        {goal.goal}
      </p>
    </div>
  );
};
