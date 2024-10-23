import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { useCallback, useRef } from "react";
import { useDeletePostMutation } from "../../redux/api-slices/postsApiSlice";
type Props = {
  postId: number;
};
const DeletePostDialog = ({ postId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deletePost, deletePostResult] = useDeletePostMutation();
  const cancelRef = useRef<HTMLButtonElement>(null!);
  const handleDelete = useCallback(async () => {
    const result = await deletePost({ deletedPostId: postId });
    if (result.data) {
      onClose();
    }
  }, [onClose, deletePost, postId]);
  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        <DeleteIcon />
      </Button>
      <AlertDialog
        isCentered
        size={{ base: "xs", md: "xl" }}
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Post
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                colorScheme="teal"
                variant={"outline"}
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                disabled={deletePostResult.isLoading}
                isLoading={deletePostResult.isLoading}
                onClick={handleDelete}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
export default DeletePostDialog;
