"use server";
import { CreateIssuePrevState } from "./definitions";
import prisma from "@/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createIssueSchema } from "./validation-schemas";

export async function createIssue(
  prevState: CreateIssuePrevState,
  formData: FormData
) {
  const validation = createIssueSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });
  if (!validation.success)
    return {
      errors: validation.error.flatten().fieldErrors,
      message: "Validation Failed!",
    };

  try {
    const issue = validation.data;
    await prisma.issue.create({
      data: { title: issue.title, description: issue.description },
    });
  } catch (error) {
    return {
      message: "Failed to create issue. Database error!",
    };
  }
  revalidatePath("/issues");
  redirect("/issues");
}

export async function getIssues() {}
