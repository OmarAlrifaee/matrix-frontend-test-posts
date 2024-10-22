import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  addNewPostFormFailds,
  addNewPostFormSchema,
} from "../../lib/zod/schemas";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Textarea,
} from "@chakra-ui/react";
import ImageUploader from "../shared/ImageUploader";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../../constants/images";

const AddNewPostForm = () => {
  const addNewPostForm = useForm<addNewPostFormFailds>({
    resolver: zodResolver(addNewPostFormSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      image: "/assets/upload-image.jpg",
    },
  });
  const onSubmit: SubmitHandler<addNewPostFormFailds> = useCallback(
    async (data) => {
      if (!(data.image?.[0] instanceof File)) delete data.image;
      if (data.image?.[0] instanceof File) {
        if (!ACCEPTED_IMAGE_TYPES.includes(data.image?.[0]?.type)) {
          addNewPostForm.setError("image", {
            message: `The image Type Should Be Only ${ACCEPTED_IMAGE_TYPES.join(
              " or "
            )}`,
          });
          return;
        }
        if (data.image?.[0]?.size >= MAX_FILE_SIZE) {
          addNewPostForm.setError("image", {
            message: "The image Size Should Be Less Than 1.5mb",
          });
          return;
        }
      }
      console.log(data);
    },
    [addNewPostForm]
  );
  const changeImage = (files: FileList | null) => {
    if (files?.length) {
      addNewPostForm.setValue("image", files);
    }
  };
  return (
    <form onSubmit={addNewPostForm.handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        <FormControl
          isInvalid={!!addNewPostForm.formState.errors.title?.message}
        >
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            {...addNewPostForm.register("title")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {addNewPostForm.formState.errors.title?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={!!addNewPostForm.formState.errors.description?.message}
        >
          <FormLabel>Description</FormLabel>
          <Textarea
            {...addNewPostForm.register("description")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {addNewPostForm.formState.errors.description?.message}
          </FormErrorMessage>
        </FormControl>
        <ImageUploader
          changeImage={changeImage}
          image={
            addNewPostForm.watch("image")?.[0] instanceof File
              ? URL.createObjectURL(addNewPostForm.watch("image")?.[0])
              : addNewPostForm.watch("image")
          }
          imageError={addNewPostForm.formState.errors.image?.message?.toString()}
        />
        <Button
          isDisabled={false}
          isLoading={false}
          type="submit"
          w={"full"}
          colorScheme="teal"
        >
          Add
        </Button>
      </Stack>
    </form>
  );
};
export default AddNewPostForm;
