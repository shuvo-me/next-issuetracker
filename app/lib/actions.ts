import { z } from "zod";
import { Issue } from "./definitions";
import prisma from "../db";

export async function getIssues() {}

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function createIssue(issue: Issue) {
  const validation = createIssueSchema.safeParse(issue);
  if (!validation.success) return validation.error.errors;
  const createdIssue: Issue = await prisma.issue.create({
    data: { title: issue.title, description: issue.description },
  });

  return createdIssue;
}
