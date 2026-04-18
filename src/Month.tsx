import "./styles.css"

interface MonthProps {
    year: number
    month: number
}

const monthNames: string[] = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const Month = ( { month, year }: MonthProps) => {
    const lastDate = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month).getDay()
    let date = 1;

    const numberOfRows = Math.ceil(lastDate / 7);

    const elements = [];
    for (let index = 1; index < lastDate + 1; index++) {
        elements.push(<p></p>);
    }

    return(<div className="month">   
    <h3>{monthNames[new Date(year, month).getMonth()]}</h3> 
    <table>
        <thead>
            <tr>
            <th>Sun</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>Th</th>
            <th>F</th>
            <th>Sat</th>
            </tr>
        </thead>
        <tbody>
            {
            Array.from({ length: numberOfRows }, () => (
                <tr>
                    {Array.from({ length: 7 }, (_, i) => (
                        <td key={i}>{}</td>
                    ))}
                </tr>
            ))
            }
        </tbody>
    </table>
    </div>
    )
}   