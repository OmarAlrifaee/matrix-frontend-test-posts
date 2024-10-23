import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  updatePostFormFailds,
  updatePostFormSchema,
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
import { useUpdatePostMutation } from "../../redux/api-slices/postsApiSlice";
import { Post } from "../../types/posts";
type Props = {
  closeModel: () => void;
  post: Post;
};
const UpdatePostForm = ({ closeModel, post }: Props) => {
  const [updatePost, updatePostResult] = useUpdatePostMutation();
  const updatePostForm = useForm<updatePostFormFailds>({
    resolver: zodResolver(updatePostFormSchema),
    mode: "onChange",
    defaultValues: {
      title: post.title,
      description: post.description,
      image: post?.image || null,
    },
  });
  const onSubmit: SubmitHandler<updatePostFormFailds> = useCallback(
    async (data) => {
      // delete empty keys
      if (!data.title) delete data.title;
      if (!data.description) delete data.description;
      if (!(data.image?.[0] instanceof File)) delete data.image;
      if (data.image?.[0] instanceof File) {
        if (!ACCEPTED_IMAGE_TYPES.includes(data.image?.[0]?.type)) {
          console.log("not includs");
        }
        if (data.image?.[0]?.size >= MAX_FILE_SIZE) {
          console.log("its to big");
        }
      }
      const result = await updatePost({
        post: { ...data, image: data.image?.[0] },
        UpdatedPostId: post.id,
      });
      if (result.data) {
        updatePostForm.reset();
        closeModel();
      }
    },
    [closeModel, updatePost, post, updatePostForm]
  );
  return (
    <form onSubmit={updatePostForm.handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        <FormControl
          isInvalid={!!updatePostForm.formState.errors.title?.message}
        >
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            {...updatePostForm.register("title")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {updatePostForm.formState.errors.title?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={!!updatePostForm.formState.errors.description?.message}
        >
          <FormLabel>Description</FormLabel>
          <Textarea
            {...updatePostForm.register("description")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {updatePostForm.formState.errors.description?.message}
          </FormErrorMessage>
        </FormControl>
        {updatePostForm.getValues("image") ? (
          <ImageUploader
            changeImage={(files: FileList | null) => {
              if (files?.length) {
                updatePostForm.setValue("image", files);
              }
            }}
            image={
              updatePostForm.watch("image")?.[0] instanceof File
                ? URL.createObjectURL(updatePostForm.watch("image")?.[0])
                : updatePostForm.watch("image")
            }
            imageError={updatePostForm.formState.errors.image?.message?.toString()}
          />
        ) : (
          ""
        )}
        <Button
          isDisabled={updatePostResult.isLoading}
          isLoading={updatePostResult.isLoading}
          type="submit"
          w={"full"}
          colorScheme="teal"
        >
          Update
        </Button>
      </Stack>
    </form>
  );
};
export default UpdatePostForm;
