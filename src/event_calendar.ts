/**
 * Есть список событий с указанием времени их начала и окончания (24-часовом формате). Напишите алгоритм, 
 * определяющий, совпадают ои какие-либо события.
 */

type CalendarEvent = {
  id: number
  start: number
  end: number
}

const events: CalendarEvent[] = [
  {
    id: 1,
    start: 10,
    end: 12,
  },
  {
    id: 2,
    start: 13,
    end: 15,
  },
  {
    id: 3,
    start: 9,
    end: 11,
  },
  {
    id: 4,
    start: 14,
    end: 16,
  },
  {
    id: 5,
    start: 0,
    end: 23,
  },
  {
    id: 6,
    start: 2,
    end: 3,
  },
]

export const hasOverlap = (events: CalendarEvent[]): boolean => {

  const sortedEvents = events.sort((a, b) => a.start - b.start)

  for (let i = 1; i < sortedEvents.length; i++) {
    const event = sortedEvents[i - 1]
    const nextEvent = sortedEvents[i]

    if (event.end > nextEvent.start) {
      return true
    }
  }

  return false
}

console.log(hasOverlap(events))