"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function CreateIssue() {
  return (
    <div className=" max-w-xl space-y-3">
      <TextField.Root placeholder="Title" type="text" />
      <SimpleMDE />
      <Button type="button">Create</Button>
    </div>
  );
}
