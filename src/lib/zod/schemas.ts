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
  password_confirmation: z
    .string()
    .min(1, "Required")
    .min(6, "Password Should Be 6 Chars At Least"),
});
export const addNewPostFormSchema = z.object({
  title: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
  image: z.any(),
});
export const updatePostFormSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  image: z.any().optional(),
});
const ENV = z.object({
  VITE_API_BASE_URL: z.string().url(),
})
export const validatedEnv = ENV.parse(import.meta.env);
export type loginFormFailds = z.infer<typeof loginFormSchema>;
export type registerFormFailds = z.infer<typeof registerFormSchema>;
export type addNewPostFormFailds = z.infer<typeof addNewPostFormSchema>;
export type updatePostFormFailds = z.infer<typeof updatePostFormSchema>;
