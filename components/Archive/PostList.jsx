import { Box } from "@material-ui/core";

import Post from "./Post";
import Empty from "./Empty";

import { useStore } from "../../utils/store/store";
import searchArchive from "../../utils/filter/searchArchive";

// render list of post previews; if only one returned, show full post
const PostList = ({ posts }) => {
  const searchTerm = useStore((state) => state.search);

  if (posts && searchTerm) posts = searchArchive(posts, searchTerm);

  return (
    <Box>
      {posts ? (
        posts.map((post) => (
          <Box key={post.id} mb={2}>
            <Post post={post} />
          </Box>
        ))
      ) : (
        <Empty />
      )}
    </Box>
  );
};

export default PostList;
