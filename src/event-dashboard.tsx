import { Grid } from "@raycast/api";
import { GetEvents, GetLatestTickets } from "./lib/vivenu/api";
import { useCachedPromise, usePromise } from "@raycast/utils";
import React from "react";
import { TicketsPerDayTile } from "./lib/dashboard/tickets-per-day-kpi";
import { PercentageGridItem } from "./lib/components/percentage-grid-item";

export default function Command() {
  const { data: events, isLoading } = useCachedPromise(GetEvents);
  const [selectedEventId, setSelectedEventId] = React.useState<string | undefined>(events?.rows[0]._id);
  const selectedEvent = events?.rows.find((event) => event._id === selectedEventId);
  const { data: eventTickets, isLoading: isTicketsLoading } = usePromise(
    GetLatestTickets,
    [undefined, [selectedEventId!]],
    { execute: !!selectedEventId },
  );

  return (
    <Grid
      isLoading={isLoading || isTicketsLoading}
      aspectRatio="1"
      itemSize={Grid.ItemSize.Small}
      searchBarAccessory={
        <Grid.Dropdown tooltip="Select Event" storeValue={true} onChange={setSelectedEventId}>
          {events?.rows.map((event) => <Grid.Dropdown.Item key={event._id} title={event.name} value={event._id} />)}
        </Grid.Dropdown>
      }
    >
      <Grid.Section title="Per Day">
        <TicketsPerDayTile
          title="Today"
          eventTickets={eventTickets}
          selectedEvent={selectedEvent}
          ticketsSoldToday={
            eventTickets?.rows.filter((x) => new Date(x.createdAt).getDate() === new Date().getDate()).length
          }
        />

        <TicketsPerDayTile
          title="Yesterday"
          eventTickets={eventTickets}
          selectedEvent={selectedEvent}
          ticketsSoldToday={
            eventTickets?.rows.filter((x) => new Date(x.createdAt).getDate() === new Date().getDate() - 1).length
          }
        />
      </Grid.Section>
      <Grid.Section title="Overall">
        {eventTickets && (
          <PercentageGridItem
            title="Tickets sold"
            subtitle={`${eventTickets!.total} / ${selectedEvent!.maxAmount}`}
            percentage={eventTickets!.total / selectedEvent!.maxAmount}
          />
        )}
      </Grid.Section>
    </Grid>
  );
}
