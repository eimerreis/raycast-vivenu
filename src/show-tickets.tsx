import { Action, ActionPanel, Color, Icon, List, updateCommandMetadata } from "@raycast/api";
import { useCachedPromise, usePromise } from "@raycast/utils";
import { GetEventsMap, GetLatestTickets, SendTicketMail } from "./lib/vivenu/api";
import { useEffect } from "react";
import { TicketStatusDropdown } from "./lib/components/ticket-status-dropdown";
import React from "react";
import { TicketStatus } from "./lib/vivenu/types";
import { TicketEmailForm } from "./lib/components/ticket-email-form";

export default function Command() {
  const [status, setStatus] = React.useState<TicketStatus>(TicketStatus.Valid);
  const { data: events } = useCachedPromise(GetEventsMap);
  const { isLoading, data: tickets } = usePromise(GetLatestTickets, [status]);

  useEffect(() => {
    (async () => {
      await updateCommandMetadata({ subtitle: `${tickets?.total} tickets` });
    })();
  }, [tickets]);

  return (
    <List
      isLoading={isLoading}
      searchBarPlaceholder="Filter tickets by name..."
      searchBarAccessory={<TicketStatusDropdown onStatusChange={setStatus} />}
    >
      {tickets?.rows.map((row) => (
        <List.Item
          accessories={[
            { icon: Icon.Pin, tag: { value: events ? events[row.eventId].name : undefined, color: Color.Blue } },
            { icon: Icon.Ticket, tag: { value: row.categoryName } },
            { icon: Icon.Calendar, tag: new Date(row.createdAt).toLocaleDateString() },
          ]}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={`https://dashboard.vivenu.com/tickets/${row._id}`}></Action.OpenInBrowser>
              <Action title="Resend Mail to Customer" onAction={() => SendTicketMail(row._id, row.email)} />
              <Action.Push title="Send Mail to..." target={<TicketEmailForm ticketId={row._id} />} />
            </ActionPanel>
          }
          title={row.name}
          subtitle={row.email}
          key={row._id}
        />
      ))}
    </List>
  );
}
