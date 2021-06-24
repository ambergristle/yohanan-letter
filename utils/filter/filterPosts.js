import Fuse from "fuse.js";

// sort posts by date (desc)
const sortByDate = (a, b) => {
  // extract date from fuse items
  const dateA = a.item[3].v;
  const dateB = b.item[3].v;

  return new Date(dateB) > new Date(dateA) ? 1 : -1;
};

// identify post keys to search in (date for sorting)
const options = {
  keys: ["title", "text", "tags.name", "date"],
  sortFn: sortByDate,
};

// sort posts and filter by search term (if any)
const filterPosts = (posts, searchTerm) => {
  const fuse = new Fuse(posts, options);

  const filtered = fuse.search(searchTerm);

  return filtered.map(({ item }) => item);
};

export default filterPosts;
