import { Grid } from "@raycast/api";
import { KpiPercentageBar } from "./KpiPercentageBar";

export const TicketsPerDayKPI = (totalCapacity: number, totalTicketsSold: number, eventDate: string) => {
  const daysUntilEvent = (new Date(eventDate).getTime() - new Date().getTime()) / 86400000;
  const remainingCapacity = totalCapacity - totalTicketsSold;
  const ticketsPerDay = (remainingCapacity / daysUntilEvent)

  return { ticketsPerDay };
};

export const TicketsPerDayTile = ({
  selectedEvent,
  eventTickets,
  ticketsSoldToday,
}: {
  selectedEvent?: { maxAmount: number; start: string };
  eventTickets?: { total: number };
  ticketsSoldToday?: number;
}) => {
  if (!selectedEvent || !eventTickets || !ticketsSoldToday) return null;

  const { ticketsPerDay } = TicketsPerDayKPI(selectedEvent?.maxAmount, eventTickets?.total, selectedEvent?.start);
  const percentage = ticketsSoldToday / ticketsPerDay;

  return (
    <Grid.Item
      title={"Sold today"}
      subtitle={`${ticketsSoldToday} / ${ticketsPerDay.toFixed(0)}`}
      content={{ source: KpiPercentageBar(percentage) }}
    />
  );
};
