// import getPosts from "../lib/posts/getPosts";
import { Container } from "@material-ui/core";
import Controls from "./Controls/Controls";

const Publisher = ({ draft }) => {
  return (
    <Container maxWidth="md">
      <Controls />
      <div>{draft}</div>
    </Container>
  );
};

export default Publisher;
