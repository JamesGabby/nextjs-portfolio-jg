import { z } from "zod";
import { PROJECT_TYPES, BUDGET_RANGES } from "./constants";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  company: z
    .string()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional()
    .or(z.literal("")),
  projectType: z.enum(PROJECT_TYPES, {
    message: "Please select a project type",
  }),
  budget: z.enum(BUDGET_RANGES, {
    message: "Please select a budget range",
  }),
  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;