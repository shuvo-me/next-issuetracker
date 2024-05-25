import { Button, TextArea, TextField } from "@radix-ui/themes";

export default function CreateIssue() {
  return (
    <div className=" max-w-xl space-y-3">
      <TextField.Root placeholder="Title" type="text" />
      <TextArea placeholder="Description..." />
      <Button type="button">Create</Button>
    </div>
  );
}
