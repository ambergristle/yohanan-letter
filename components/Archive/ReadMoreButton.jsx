import Link from "next/link";

import { Button } from "@material-ui/core";

// link to post page using generated path
const ReadMoreButton = ({ href }) => {
  return (
    <Link href={`/posts/${id}`} as={`/posts/${date}/${topic}`} passHref>
      <Button size="small" color="primary" disableRipple>
        Keep Reading
      </Button>
    </Link>
  );
};

export default ReadMoreButton;
