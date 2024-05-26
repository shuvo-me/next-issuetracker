"use server";
import { z } from "zod";
import { CreateIssuePrevState, Issue } from "./definitions";
import prisma from "../db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function getIssues() {}

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

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
      errors: error,
      message: "Failed to create issue. Database error!",
    };
  }
  revalidatePath("/issues");
  redirect("/issues");
}
