import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { PaginatedPosts } from "../../types/posts";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";

type Props = {
  posts: PaginatedPosts;
};
const Pagination = ({ posts }: Props) => {
  const [urlSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const setPage = useCallback(
    (page: string) => {
      const params = new URLSearchParams(urlSearchParams.toString());
      params.set("page", page);
      navigate(`${pathname}?${params.toString()}`, { replace: true });
    },
    [urlSearchParams, navigate, pathname]
  );
  return (
    <Stack>
      <Flex align={"center"} justify={"space-between"} gap={3} wrap={"wrap"}>
        {posts.links.map((link) => (
          <Button
            key={link.label}
            isDisabled={!link?.url}
            variant={link.active ? "solid" : "outline"}
            colorScheme="teal"
            onClick={() =>
              setPage(link?.url?.length ? link.url[link.url.length - 1] : "1")
            }
          >
            {link.label}
          </Button>
        ))}
      </Flex>
      <Text fontWeight={"medium"}>
        from {posts.from} to {posts.to}
      </Text>
    </Stack>
  );
};
export default Pagination;
