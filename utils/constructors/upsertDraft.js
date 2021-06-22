import { DateTime } from "luxon";

// convert date, title to slug (yyyy/mm/dd/post-title)
// letter slug is yyyy/mm/dd
const toSlug = (date, title) => {
  const dateString = DateTime.fromISO(date).toFormat("yyyy/LL/dd");
  const htmlSafeTitle = title
    .toLowerCase()
    .replace(/[^A-Za-z0-9_-\s]/g, "")
    .replace(/\s/g, "-");
  return `${dateString}${title ? "/" : ""}${htmlSafeTitle}`;
};

// filter "sources" with no title or href
const filterSources = (sources) =>
  sources.filter((source) => source.title && source.href);

// create list of sources (for post.create query)
const createSources = (sources) => ({
  create: sources.map((source) => source),
});

// upsert list of sources (for post.upsert query)
const upsertSources = (sources) => ({
  upsert: sources.map((source) => ({
    where: { id: source.id },
    create: source,
    update: source,
  })),
});

// connect or create tags (for post.create and post.upsert queries)
// tags will never be updated via publisher, no tag.update needed
const connectOrCreateTags = (tags) => ({
  connectOrCreate: tags.map((tag) => ({
    where: { id: tag.id },
    create: tag,
  })),
});

// create list of posts (for draft.create and draft.upsert)
const createPosts = (date, posts) => ({
  create: posts.map(({ sources, tags, ...post }) => {
    const filteredSources = filterSources(sources);
    const anySources = filteredSources.length > 0;

    return {
      ...(anySources && { sources: createSources(filteredSources) }),
      tags: connectOrCreateTags(tags),
      ...post,
      draft: true,
      date: date,
      slug: toSlug(date, post.title),
    };
  }),
});

// upsert list of posts (for draft.upsert)
const upsertPosts = (date, posts, publish) => ({
  upsert: posts.map(({ id, sources, tags, ...post }) => {
    const filteredSources = filterSources(sources);
    const anySources = filteredSources.length > 0;

    return {
      where: { id: id },
      create: {
        id: id,
        ...(anySources && { sources: createSources(filteredSources) }),
        tags: connectOrCreateTags(tags),
        ...post,
        draft: true,
        date: date,
        slug: toSlug(date, post.title),
      },
      update: {
        ...(anySources && { sources: upsertSources(filteredSources) }),
        tags: connectOrCreateTags(tags),
        ...post,
        ...(publish && { draft: false }),
        slug: toSlug(date, post.title),
        date: date,
      },
    };
  }),
});

// create upsert draft query
const upsertDraft = ({ id, date, posts, ...draft }, publish = false) => ({
  where: { id: id },
  create: {
    id,
    date,
    slug: toSlug(date, ""),
    draft: true,
    posts: createPosts(date, posts),
    ...draft,
  },
  update: {
    posts: upsertPosts(date, posts, publish),
    ...draft,
    ...(publish && { draft: false }),
    date: date,
    slug: toSlug(date, ""),
  },
});

export default upsertDraft;
