import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { registerFormFailds, registerFormSchema } from "../../lib/zod/schemas";
import { useCallback } from "react";
const RegisterForm = () => {
  const registerForm = useForm<registerFormFailds>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<registerFormFailds> = useCallback(
    async (data) => {
      if (data.password !== data.passwordRepeated)
        registerForm.setError("passwordRepeated", {
          message: "Please Make Sure You Entered The Same Value As Password",
        });
      console.log(data);
    },
    [registerForm]
  );
  return (
    <form onSubmit={registerForm.handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!registerForm.formState.errors.username?.message}
      >
        <FormLabel>User Name</FormLabel>
        <Input type="text" {...registerForm.register("username")} />
        <FormErrorMessage>
          {registerForm.formState.errors.username?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        mt={5}
        isInvalid={!!registerForm.formState.errors.email?.message}
      >
        <FormLabel>Email</FormLabel>
        <Input type="email" {...registerForm.register("email")} />
        <FormErrorMessage>
          {registerForm.formState.errors.email?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        mt={5}
        isInvalid={!!registerForm.formState.errors.password?.message}
      >
        <FormLabel>Password</FormLabel>
        <Input type="password" {...registerForm.register("password")} />
        <FormErrorMessage>
          {registerForm.formState.errors.password?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        mt={5}
        isInvalid={!!registerForm.formState.errors.passwordRepeated?.message}
      >
        <FormLabel>Password Agine</FormLabel>
        <Input type="password" {...registerForm.register("passwordRepeated")} />
        <FormErrorMessage>
          {registerForm.formState.errors.passwordRepeated?.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        isDisabled={false}
        isLoading={false}
        mt={5}
        type="submit"
        w={"full"}
        colorScheme="blue"
      >
        Sign Up
      </Button>
    </form>
  );
};
export default RegisterForm;
