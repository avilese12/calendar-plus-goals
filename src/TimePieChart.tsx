import "./styles.css";

export const TimePieChart = () => {
  return (
    <>
      <div className="time-pie-chart"></div>
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color sleep"></div> Sleep
        </div>
        <div className="legend-item">
          <div className="legend-color freetime"></div> Free Time
        </div>
        <div className="legend-item">
          <div className="legend-color work"></div> Work
        </div>
      </div>
    </>
  );
};
