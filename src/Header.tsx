import { useState, useEffect } from "react"
import { getTimeLeftInYearInMilliseconds } from "./util"
import "./styles.css"

export const Header = () => {
    const timeInMS =  getTimeLeftInYearInMilliseconds()
    const timeLeftInHours = Math.floor( timeInMS / (1000 * 60 * 60) )
    const timeLeftInDays = Math.floor( timeInMS / (1000 * 60 * 60 * 24) )

    const [time, setTime] = useState(new Date());

    useEffect(() => {
    // Set up the interval
    const interval = setInterval(() => {
      setTime(new Date()); // Updating state triggers a rerender
    }, 1000);

    // Clean up the interval on unmount to prevent memory leaks
    return () => clearInterval(interval);
    }, []);


    return (
    <div className="header">
        <h1>There are <i>{timeLeftInDays}</i> day(s) left in the year </h1>
        <h1> That is <i>{timeLeftInHours}</i> hour(s)</h1> 
        <h2> {time.toLocaleDateString()}</h2>
    </div>
    )
}