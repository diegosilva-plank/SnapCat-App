import { Translation } from 'translations/types'

export const calculateTimePast = (
  created: string,
  translation: Translation,
) => {
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
    return translation.timePast.years(years)
  } else if (months > 0) {
    return translation.timePast.months(months)
  } else if (days > 0) {
    return translation.timePast.days(days)
  } else if (hours > 0) {
    return translation.timePast.hours(hours)
  } else if (minutes > 0) {
    return translation.timePast.minutes(minutes)
  } else {
    return translation.timePast.now
  }
}
