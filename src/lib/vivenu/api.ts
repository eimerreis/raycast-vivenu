import { getPreferenceValues } from "@raycast/api";
import { fetch } from "cross-fetch";
import { TicketStatus, VivenuEventInfoResponse, VivenuEventsResponse, VivenuTicketsResponse } from "./types";

export const apiKey = getPreferenceValues<{ apiKey: string }>().apiKey;
const baseUrl = "https://vivenu.com/api";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};

/** ⬇️ Tickets ⬇️ */

export const GetLatestTickets = async (status: TicketStatus = TicketStatus.Valid, eventIds?: string[]) => {
  const response: VivenuTicketsResponse = await fetch(
    `${baseUrl}/tickets?status=${status}${eventIds ? `&event=${eventIds.join(",")}` : ""}`,
    { headers },
  ).then((res) => res.json());
  return response;
};

type CreateFreeTicketRequest = {
  eventId: string;
  items: Array<{
    amount: number;
    ticketTypeId: string;
  }>;
  prename: string;
  lastname: string;
  email: string;
};
export const CreateFreeTicket = async (req: CreateFreeTicketRequest) => {
  const response = await fetch(`${baseUrl}/tickets/free`, {
    method: "POST",
    headers,
    body: JSON.stringify(req),
  }).then((res) => res.json());
  return response;
};

export const SendTicketMail = async (ticketId: string, email: string) => {
  const response = await fetch(`${baseUrl}/tickets/${ticketId}/mail`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email }),
  }).then((res) => res.json());
  return response;
};

/** ⬇️ Events ⬇️ */

export const GetEvents = async () => {
  const response: VivenuEventsResponse = await fetch(`${baseUrl}/events`, { headers }).then((res) => res.json());
  return response;
};

export const GetEventsMap = async () => {
  const { rows: events } = await GetEvents();

  return events.reduce(
    (acc, event) => {
      acc[event._id] = event;
      return acc;
    },
    {} as Record<string, VivenuEventsResponse["rows"][0]>,
  );
};

/**
 * Gets the event info for a given event id.
 * Necessary to fetch ticket types and other event specific information.
 * @param eventId - The event id to fetch the info for.
 * @returns - The event info.
 */
export const GetEventInfo = async (eventId: string) => {
  const response: VivenuEventInfoResponse = await fetch(`${baseUrl}/events/info/${eventId}`, { headers }).then((res) =>
    res.json(),
  );
  return response;
};

/**
 * ⬇️ Customers ⬇️ * */

type CreateCustomerRequest = {
  name: string;
  primaryEmail: string;
};
export const CreateCustomer = async (values: CreateCustomerRequest) => {
  const response = await fetch(`${baseUrl}/customers`, {
    method: "POST",
    headers,
    body: JSON.stringify(values),
  }).then((res) => res.json());
  return response;
};
