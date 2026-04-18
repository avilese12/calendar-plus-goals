import { Month } from "./Month"

export const Calendar = () => {
    const currentDate = new Date()
    return(
    <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
        {Array.from({ length: 12 - currentDate.getMonth() }, (_, i) => (
      <Month year={currentDate.getFullYear()} month={i + currentDate.getMonth()} />
    ))}
    </div>
    )
}