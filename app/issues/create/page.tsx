"use client";
import { Button, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useFormState } from "react-dom";
import { createIssue } from "@/app/lib/actions";

export default function CreateIssue() {
  const initialState = { errors: {}, message: "" };
  const [state, dispatch] = useFormState(createIssue, initialState);
  console.log({ state });
  return (
    <form className=" max-w-xl space-y-3" action={dispatch}>
      <TextField.Root placeholder="Title" type="text" name="title" />
      <Text color="red" size="1">
        {state?.errors.title?.length && state.errors.title[0]}
      </Text>
      <SimpleMDE
        placeholder="description"
        textareaProps={
          { name: "description" } as React.HTMLAttributes<HTMLTextAreaElement>
        }
      />
      <Text color="red" size="1" as="p">
        {state?.errors.description?.length && state.errors.description[0]}
      </Text>
      <Button type="submit">Create</Button>
    </form>
  );
}
