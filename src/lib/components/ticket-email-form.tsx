import { Action, ActionPanel, closeMainWindow, Form, popToRoot, showHUD, showToast, Toast } from "@raycast/api";
import { SendTicketMail } from "../vivenu/api";

export const TicketEmailForm: React.FC<{ ticketId: string }> = ({ ticketId }) => {
  const onSubmit = async (values: { email: string }) => {
    try {
      await showToast({ title: "Sending Ticket Mail...", style: Toast.Style.Animated });
      await SendTicketMail(ticketId, values.email);
      await showHUD("Ticket sent ✅");
    } catch (error) {
      console.error(error);
      await showHUD("❌ Failed to send ticket ");
    } finally {
      await closeMainWindow();
      await popToRoot();
    }
  };

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Send Ticket" onSubmit={onSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="email" title="E-Mail Address" />
    </Form>
  );
};
