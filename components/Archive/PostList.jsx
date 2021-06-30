import { Box } from "@material-ui/core";

import Post from "./Post";
import Empty from "./Empty";

import { useStore } from "../../utils/store/store";
import searchArchive from "../../utils/filter/searchArchive";

// sort posts by date (desc)
const sortByDate = (a, b) => {
  // extract date from fuse items
  const dateA = a.date;
  const dateB = b.date;

  return new Date(dateB) > new Date(dateA) ? 1 : -1;
};

// render list of post previews; if only one returned, show full post
const PostList = ({ posts }) => {
  const searchTerm = useStore((state) => state.search);

  if (posts && searchTerm) posts = searchArchive(posts, searchTerm);

  return (
    <Box>
      {posts ? (
        posts.sort(sortByDate).map((post) => (
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
