import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email().min(1, "Required"),
  password: z
    .string()
    .min(1, "Required")
    .min(6, "Password Should Be 6 Chars At Least"),
});
export const registerFormSchema = z.object({
  username: z.string().min(1, "Required"),
  email: z.string().email().min(1, "Required"),
  password: z
    .string()
    .min(1, "Required")
    .min(6, "Password Should Be 6 Chars At Least"),
  passwordRepeated: z
    .string()
    .min(1, "Required")
    .min(6, "Password Should Be 6 Chars At Least"),
});
export type loginFormFailds = z.infer<typeof loginFormSchema>;
export type registerFormFailds = z.infer<typeof registerFormSchema>;
