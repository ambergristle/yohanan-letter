import Fuse from "fuse.js";

// sort posts by date (desc)
const sortByDate = (a, b) => {
  // extract date from fuse items
  const dateA = a.item[3].v;
  const dateB = b.item[3].v;

  return new Date(dateB) > new Date(dateA) ? 1 : -1;
};

const options = (searchTerm) => ({
  keys: ["title", "text", "tags.name", "date"],
  ignoreLocation: true,
  minMatchCharLength: searchTerm.length,
  threshold: 0.0,
  sortFn: sortByDate,
});

const search = (term) => `'"${term}"`;
const filter = (tags) => tags.map((tag) => `=${tag}`).join(" ");

// sort posts and filter by search term (if any)
const searchArchive = (posts, searchTerm) => {
  const fuse = new Fuse(posts, options(searchTerm));

  const filtered = fuse.search(searchTerm);

  return filtered.map(({ item }) => item);
};

export default searchArchive;
