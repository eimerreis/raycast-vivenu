import { Color, Icon, List } from "@raycast/api";
import { TicketStatus } from "../vivenu/types";

type Props = {
  onStatusChange: (newValue: TicketStatus) => void;
};

export function TicketStatusDropdown({ onStatusChange }: Props) {
  return (
    <List.Dropdown
      tooltip="Select Drink Type"
      storeValue={true}
      onChange={(newValue) => {
        onStatusChange(newValue as TicketStatus);
      }}
    >
      <List.Dropdown.Section title="Ticket Status">
        <List.Dropdown.Item
          icon={{ source: Icon.Dot, tintColor: Color.Green }}
          title={`Status: ${TicketStatus.Valid}`}
          value={TicketStatus.Valid}
        />
        <List.Dropdown.Item
          icon={{ source: Icon.Dot, tintColor: Color.Red }}
          title={`Status: ${TicketStatus.Invalid}`}
          value={TicketStatus.Invalid}
        />
      </List.Dropdown.Section>
    </List.Dropdown>
  );
}
