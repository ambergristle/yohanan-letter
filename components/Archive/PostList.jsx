import { Box } from "@material-ui/core";

import Post from "./Post";
import Empty from "./Empty";

import { useStore } from "../../utils/store/store";
import filterPosts from "../../utils/filter/filterPosts";

// render list of post previews; if only one returned, show full post
const PostList = ({ posts, preview }) => {
  const searchTerm = useStore((state) => state.search) || " ";

  if (posts) posts = filterPosts(posts, searchTerm);

  return (
    <Box>
      {posts ? (
        posts.map((post) => (
          <Box key={post.id} mb={2}>
            <Post post={post} preview={preview} />
          </Box>
        ))
      ) : (
        <Empty />
      )}
    </Box>
  );
};

export default PostList;
