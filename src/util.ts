export const getTimeLeftInYearInMilliseconds = () => {
    const now = new Date();
    const endOfYear = new Date("2026-12-31")

    return (endOfYear.getTime() - now.getTime())
}