import { Translation } from 'translations/types'
import { DateTime } from 'luxon'

export const calculateTimePast = (
  created: string,
  translation: Translation,
) => {
  const createdDate = DateTime.fromISO(created)
  const currentDate = DateTime.now()

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.diff(createdDate)

  // Convert milliseconds to seconds, minutes, hours, days, months, or years
  const minutes = Math.floor(timeDifference.as('minutes'))
  const hours = Math.floor(timeDifference.as('hours'))
  const days = Math.floor(timeDifference.as('days'))
  const months = Math.floor(timeDifference.as('months'))
  const years = Math.floor(timeDifference.as('years'))

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
