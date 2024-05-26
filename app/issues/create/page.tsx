"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useFormState } from "react-dom";
import { createIssue } from "@/app/lib/actions";

export default function CreateIssue() {
  const initialState = { errors: undefined, message: "" };
  const [state, dispatch] = useFormState(createIssue, initialState);
  console.log({ state });
  return (
    <form className=" max-w-xl space-y-3" action={dispatch}>
      <TextField.Root placeholder="Title" type="text" name="title" />
      <SimpleMDE
        placeholder="description"
        textareaProps={
          { name: "description" } as React.HTMLAttributes<HTMLTextAreaElement>
        }
      />
      <Button type="submit">Create</Button>
    </form>
  );
}
