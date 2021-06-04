// prisma "create" queries do not support nested update queries (@2.21.2)

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
      draft: true,
      sources: createSources(sources),
      tags: connectOrCreateTags(tags),
      ...post,
    },
    update: {
      draft: !publish,
      sources: upsertSources(sources),
      tags: connectOrCreateTags(tags),
      ...post,
    },
  })),
});

// create upsert draft query
const upsertDraft = ({ id, posts, ...draft }, publish) => ({
  where: { id: id },
  create: {
    id: id,
    draft: true,
    posts: createPosts(posts),
    ...draft,
  },
  update: {
    draft: !publish,
    posts: upsertPosts(posts, publish),
    ...draft,
  },
});

export default upsertDraft;
