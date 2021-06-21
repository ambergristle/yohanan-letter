// prisma "create" queries do not support nested update queries (@2.21.2)

// convert date, title to slug (yyyy/mm/dd/post-title)
// letter slug is yyyy/mm/dd
const toSlug = (date, title) => {
  const dateString = date.slice(0, 10).replace(/-/g, "/");
  const htmlSafeTitle = title
    .toLowerCase()
    .replace(/[^A-Za-z0-9_-\s]/g, "")
    .replace(/\s/g, "-");
  return `${dateString}${title ? "/" : ""}${htmlSafeTitle}`;
};

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
const createPosts = (posts) => ({
  create: posts.map(({ sources, tags, ...post }) => ({
    slug: toSlug(post.date, post.title),
    draft: true,
    sources: createSources(sources),
    tags: connectOrCreateTags(tags),
    ...post,
  })),
});

// upsert list of posts (for draft.upsert)
const upsertPosts = (posts, publish) => ({
  upsert: posts.map(({ id, sources, tags, ...post }) => ({
    where: { id: id },
    create: {
      id: id,
      slug: toSlug(post.date, post.title),
      draft: true,
      sources: createSources(sources),
      tags: connectOrCreateTags(tags),
      ...post,
    },
    update: {
      ...(publish && { draft: false }),
      slug: toSlug(post.date, post.title),
      sources: upsertSources(sources),
      tags: connectOrCreateTags(tags),
      ...post,
    },
  })),
});

// create upsert draft query
const upsertDraft = ({ id, posts, ...draft }, publish = false) => ({
  where: { id: id },
  create: {
    id: id,
    slug: toSlug(draft.date, ""),
    draft: true,
    posts: createPosts(posts),
    ...draft,
  },
  update: {
    slug: toSlug(draft.date, ""),
    ...(publish && { draft: false }),
    posts: upsertPosts(posts, publish),
    ...draft,
  },
});

export default upsertDraft;
