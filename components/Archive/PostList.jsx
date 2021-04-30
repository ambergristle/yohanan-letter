import { Grid } from "@material-ui/core";

import Post from "./Post";

const PostList = ({ posts }) => {
  const preview = posts.length > 1 ? true : false;

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
