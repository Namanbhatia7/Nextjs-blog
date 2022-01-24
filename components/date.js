import { parseISO, format } from 'date-fns'

export default function Date({ dateform }) {
  const date = parseISO(dateform)
  return <time dateTime={dateform}>{format(date, 'LLLL d, yyyy')}</time>
}