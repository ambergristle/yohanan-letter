import Fuse from "fuse.js";

const sortByDate = (a, b) => (new Date(a) > new Date(b) ? 1 : -1);

const options = {
  keys: ["title", "text", "tags.name"],
  sortFn: sortByDate,
};

const filterPosts = (posts, searchTerm) => {
  const fuse = new Fuse(posts, options);

  const filtered = fuse.search(searchTerm);

  return filtered.map(({ item }) => item);
};

export default filterPosts;
