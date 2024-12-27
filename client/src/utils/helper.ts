
export const convertDateToString = (date: Date) => {
    //handle case yesterday, 2days ago,...etc
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const seconds = diff / 1000
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24
    const weeks = days / 7
    const months = days / 30
    const years = days / 365
    if (seconds < 60) {
        return "Just now"
    } else if (minutes < 60) {
        return `${Math.floor(minutes)} minutes ago`
    } else if (hours < 24) {
        return `${Math.floor(hours)} hours ago`
    } else if (days < 7) {
        return `${Math.floor(days)} days ago`
    } else if (weeks < 4) {
        return `${Math.floor(weeks)} weeks ago`
    } else if (months < 12) {
        return `${Math.floor(months)} months ago`
    } else {
        return `${Math.floor(years)} years ago`
    }
   
}