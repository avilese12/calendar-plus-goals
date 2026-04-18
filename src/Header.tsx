import { getTimeLeftInYearInMilliseconds } from "./util"
import "./styles.css"

export const Header = () => {
    const timeInMS =  getTimeLeftInYearInMilliseconds()
    const timeLeftInHours = Math.floor( timeInMS / (1000 * 60 * 60) )
    const timeLeftInDays = Math.floor( timeInMS / (1000 * 60 * 60 * 24) )

    return (
    <div className="header">
    <h1>There are {timeLeftInDays} day(s) left in the year <br/> That is {timeLeftInHours} hour(s)</h1> 
    </div>
    )
}