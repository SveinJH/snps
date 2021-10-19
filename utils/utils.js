const MONTH_NAMES = [
    'januar',
    'februar',
    'mars',
    'april',
    'mai',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'desember',
]

export const getNorwegianDateString = dateString => {
    const d = new Date(dateString)
    return `${d.getDate()}. ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`
}
