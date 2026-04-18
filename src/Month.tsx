import "./styles.css"

interface MonthProps {
    year: number
    month: number
}

const monthNames: string[] = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getCalendarWeeks(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [
    ...Array(firstDay).fill(null),      // leading empty cells
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // chunk into weeks of 7
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  // pad the last week to 7 cells
  const last = weeks[weeks.length - 1];
  while (last.length < 7) last.push(null);

  return weeks;
}

function getDayClass(day: number, year: number, month: number): string | undefined {
  if (!day) return undefined;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(year, month, day) < today ? "passed" : "day";
}

export const Month = ( { month, year }: MonthProps) => {
    const specifiedDate = new Date(year, month)
    const weeks = getCalendarWeeks(specifiedDate.getFullYear(), specifiedDate.getMonth());

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
           {weeks.map((week, wi) => (
            <tr key={wi}>
            {week.map((day, di) => (
                <td key={di} className={getDayClass(day, year, month)}>
                    {day ?? ""}
                </td>
            ))}
            </tr>
      ))}
        </tbody>
    </table>
    </div>
    )
}   