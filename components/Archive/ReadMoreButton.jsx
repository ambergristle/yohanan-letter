import Link from "next/link";

import { Button } from "@material-ui/core";

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
