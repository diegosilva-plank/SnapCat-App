export const calculateTimePast = (created: string) => {
  const createdDate = new Date(created)
  const currentDate = new Date()

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - createdDate.getTime()

  // Convert milliseconds to seconds, minutes, hours, days, months, or years
  const seconds = Math.floor(timeDifference / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30) // Approximate
  const years = Math.floor(months / 12) // Approximate

  // Determine the appropriate unit and value to display
  if (years > 0) {
    return `${years} year${years !== 1 ? 's' : ''} ago`
  } else if (months > 0) {
    return `${months} month${months !== 1 ? 's' : ''} ago`
  } else if (days > 0) {
    return `${days} day${days !== 1 ? 's' : ''} ago`
  } else if (hours > 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`
  } else if (minutes > 0) {
    return `${minutes} min ago`
  } else {
    return 'just now'
  }
}
