import Fuse from "fuse.js";

const options = {
  keys: ["title", "text", "tags.name"],
};

const filterPosts = (posts, searchTerm) => {
  const fuse = new Fuse(posts, options);

  const filtered = fuse.search(searchTerm);

  return filtered.map(({ item }) => item);
};

export default filterPosts;
