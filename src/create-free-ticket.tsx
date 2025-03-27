import { Action, ActionPanel, Clipboard, closeMainWindow, Form, showToast, Toast } from "@raycast/api";
import { FormValidation, useCachedPromise, useForm } from "@raycast/utils";
import { CreateFreeTicket, GetEventInfo, GetEvents } from "./lib/vivenu/api";
import { useState } from "react";

type Values = {
  customerName: string;
  customerEmail: string;
  eventId: string;
  ticketTypeId: string;
  amount: string;
};

export default function Command() {
  const { data: events } = useCachedPromise(GetEvents);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const { data: eventInfo } = useCachedPromise(GetEventInfo, [selectedEvent!], { execute: !!selectedEvent });
  const { handleSubmit } = useForm<Values>({
    onSubmit: async ({ amount, customerEmail, customerName, eventId, ticketTypeId }) => {
      const splitted = customerName.split(" ");
      const { length, [length - 1]: lastname } = splitted;
      const rest = splitted.slice(0, length - 1);
      const freeTicket = await CreateFreeTicket({
        prename: rest.join(" "),
        lastname,
        email: customerEmail,
        eventId: eventId,
        items: [{ amount: parseInt(amount), ticketTypeId: ticketTypeId }],
      });

      await showToast(Toast.Style.Success, "Ticket created", `Ticket for ${customerName} created successfully`);
      await Clipboard.copy(`https://dashboard.vivenu.com/tickets/${freeTicket._id}`);
      await closeMainWindow();
    },
    validation: {
      customerName: FormValidation.Required,
      customerEmail: FormValidation.Required,
      eventId: FormValidation.Required,
      ticketTypeId: FormValidation.Required,
      amount: (val) => (val && parseInt(val) > 0 ? undefined : "Amount must be greater than 0"),
    },
  });

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Create Ticket" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField title="Customer Name" id="customerName" />
      <Form.TextField title="Customer Email" id="customerEmail" />
      <Form.Dropdown title="Event" id="eventId" onChange={setSelectedEvent}>
        {events?.rows.map((event) => (
          <Form.Dropdown.Item key={event._id} icon={event.image} title={event.name} value={event._id} />
        ))}
      </Form.Dropdown>
      <Form.Dropdown title="Ticket Type" id="ticketTypeId">
        {eventInfo?.tickets.map((ticketType) => (
          <Form.Dropdown.Item key={ticketType.id} title={ticketType.name} value={ticketType.id} />
        ))}
      </Form.Dropdown>
      <Form.TextArea id="amount" title="Amount" defaultValue="1" />
    </Form>
  );
}
