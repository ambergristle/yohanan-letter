import { Grid } from "@material-ui/core";

import Post from "./Post";

import { useStore } from "../../utils/store/store";
import filterPosts from "../../utils/filter/filterPosts";

// render list of post previews; if only one returned, show full post
const PostList = ({ posts }) => {
  const preview = posts.length > 1 ? true : false;

  const searchTerm = useStore((state) => state.search);

  if (preview) {
    posts = filterPosts(posts, searchTerm);
  }

  return (
    <Grid container>
      {posts.map((post) => (
        <Grid item key={post.id}>
          <Post post={post} preview={preview} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
