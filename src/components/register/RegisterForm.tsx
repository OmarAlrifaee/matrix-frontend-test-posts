import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { registerFormFailds, registerFormSchema } from "../../lib/zod/schemas";
import { useCallback } from "react";
import { useRegisterMutation } from "../../redux/api-slices/authApiSlice";
import { useAppDispatch } from "../../redux/store";
import { handleToastContent } from "../../redux/slices/toastSlice";
const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [registerUser, registerUserResults] = useRegisterMutation();
  const registerForm = useForm<registerFormFailds>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<registerFormFailds> = useCallback(
    async (data) => {
      if (data.password !== data.password_confirmation) {
        registerForm.setError("password_confirmation", {
          message: "Please Make Sure You Entered The Same Value As Password",
        });
        return;
      }
      const result = await registerUser(data);
      if (
        result.error &&
        "status" in result.error &&
        result.error.status === 422 &&
        "data" in result.error
      ) {
        dispatch(
          handleToastContent({
            open: true,
            toast: {
              title: "Error",
              status: "error",
              description:
                // @ts-expect-error this error related to AxiosError type but i got an error message from backend and i want to display it
                result.error.data?.email?.[0] || "Email Already Exist",
            },
          })
        );
      }
    },
    [registerForm, registerUser, dispatch]
  );
  return (
    <form onSubmit={registerForm.handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        <FormControl isInvalid={!!registerForm.formState.errors.name?.message}>
          <FormLabel>User Name</FormLabel>
          <Input
            type="text"
            {...registerForm.register("name")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {registerForm.formState.errors.name?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!registerForm.formState.errors.email?.message}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...registerForm.register("email")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {registerForm.formState.errors.email?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={!!registerForm.formState.errors.password?.message}
        >
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            {...registerForm.register("password")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {registerForm.formState.errors.password?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={
            !!registerForm.formState.errors.password_confirmation?.message
          }
        >
          <FormLabel>Password Agine</FormLabel>
          <Input
            type="password"
            {...registerForm.register("password_confirmation")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {registerForm.formState.errors.password_confirmation?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={!!registerForm.formState.errors.user_type?.message}
        >
          <FormLabel>Select A User Role</FormLabel>
          <Select
            {...registerForm.register("user_type")}
            focusBorderColor="teal.500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Select>
          <FormErrorMessage>
            {registerForm.formState.errors.user_type?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          isDisabled={registerUserResults.isLoading}
          isLoading={registerUserResults.isLoading}
          type="submit"
          w={"full"}
          colorScheme="teal"
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  );
};
export default RegisterForm;
