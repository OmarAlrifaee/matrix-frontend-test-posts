import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import UpdatePostModel from "./UpdatePostModel";
import DeletePostDialog from "./DeletePostDialog";
import { useAppSelector } from "../../redux/store";

const Post = () => {
  const user = useAppSelector(state => state.authSlice.user)
  const imageSrc = "/assets/images.jpeg"; // placeholder
  const postsId = 0; // placeholder
  const isAdmin = user?.type === "admin";
  const isOwner = user?.user.id === postsId;
  return (
    <Card border={"1px"} overflow={"hidden"} borderColor={"blackAlpha.300"}>
      {isAdmin || isOwner ? (
        <CardHeader>
            <Flex justify={"flex-end"} alignItems={"center"} gap={3}>
              <UpdatePostModel />
              <DeletePostDialog />
            </Flex>
        </CardHeader>
      ) : (
        ""
      )}
      <CardBody textTransform={"capitalize"}>
        <Heading
          as={"h3"}
          fontWeight={"bold"}
          fontSize={"lg"}
          color={"blackAlpha.800"}
        >
          this is a title
        </Heading>
        <Text lineHeight={1.2} mt={3} color={"blackAlpha.800"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quam
          facere quasi maxime distinctio ad, eaque neque pariatur tenetur
          minima?
        </Text>
      </CardBody>
      <CardFooter>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="image"
            borderRadius={"md"}
            objectFit={"cover"}
            h={300}
            w={"full"}
          />
        ) : (
          ""
        )}
      </CardFooter>
    </Card>
  );
};
export default Post;
