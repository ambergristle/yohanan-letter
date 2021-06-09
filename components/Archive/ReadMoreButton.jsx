import Link from "next/link";
import { Button } from "@material-ui/core";

// link to post page using generated path
const ReadMoreButton = ({ slug }) => {
  return (
    <Link href={`/archive/${slug}`} passHref>
      <Button variant="contained" size="small" color="primary" disableRipple>
        Keep Reading
      </Button>
    </Link>
  );
};

export default ReadMoreButton;
