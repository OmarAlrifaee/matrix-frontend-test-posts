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
import { Post as PostType } from "../../types/posts";
type Props = {
  post: PostType;
};
const Post = ({ post }: Props) => {
  const user = useAppSelector((state) => state.authSlice.user);
  const isAdmin = user?.type === "admin";
  const isOwner = user?.user.id === post.user_id;
  return (
    <Card border={"1px"} overflow={"hidden"} borderColor={"blackAlpha.300"}>
      {isAdmin || isOwner ? (
        <CardHeader>
          <Flex justify={"flex-end"} alignItems={"center"} gap={3}>
            <UpdatePostModel post={post} />
            <DeletePostDialog postId={post.id} />
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
          {post.title}
        </Heading>
        <Text lineHeight={1.2} mt={3} color={"blackAlpha.800"}>
          {post.description}
        </Text>
      </CardBody>
      <CardFooter>
        {post?.image ? (
          <Image
            src={post.image}
            alt={`${post.title} image`}
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
