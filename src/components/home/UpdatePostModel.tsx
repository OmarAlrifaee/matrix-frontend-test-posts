import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
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
  console.log("mounted")
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
        scrollBehavior="inside"
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
        blockScrollOnMount={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpdatePostForm closeModel={onClose} post={post} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" variant={"outline"} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default UpdatePostModel;
