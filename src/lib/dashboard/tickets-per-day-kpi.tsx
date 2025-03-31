import { PercentageGridItem } from "../components/percentage-grid-item";

const getTicketsPerDayKPI = (totalCapacity: number, totalTicketsSold: number, eventDate: string) => {
  const daysUntilEvent = (new Date(eventDate).getTime() - new Date().getTime()) / 86400000;
  const remainingCapacity = totalCapacity - totalTicketsSold;
  const ticketsPerDay = remainingCapacity / daysUntilEvent;

  return { ticketsPerDay };
};

type Props = {
  selectedEvent?: { maxAmount: number; start: string };
  eventTickets?: { total: number };
  ticketsSoldToday?: number;
  title: string;
};

export const TicketsPerDayTile: React.FC<Props> = ({ selectedEvent, eventTickets, ticketsSoldToday, title }) => {
  if (!selectedEvent || !eventTickets) return null;

  const { ticketsPerDay } = getTicketsPerDayKPI(selectedEvent?.maxAmount, eventTickets?.total, selectedEvent?.start);
  const percentage = !ticketsSoldToday ? 0 : ticketsSoldToday / ticketsPerDay;

  return (
    <PercentageGridItem
      percentage={percentage}
      title={title}
      subtitle={`${ticketsSoldToday} / ${ticketsPerDay.toFixed(0)}`}
    />
  );
};
