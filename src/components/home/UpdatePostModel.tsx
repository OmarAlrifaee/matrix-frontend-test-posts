import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import UpdatePostForm from "./UpdatePostForm";
import { EditIcon } from "@chakra-ui/icons";
import { Post } from "../../types/posts";
type Props = {
  post: Post;
};
const UpdatePostModel = ({ post }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        <EditIcon />
      </Button>
      <Modal
        isCentered
        size={{ base: "xs", md: "xl" }}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpdatePostForm closeModel={onClose} post={post} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default UpdatePostModel;
