// create tag or source upsert queries
const upsertRelated = (rows) => ({
  upsert: rows.map(({ id, ...row }) => ({
    where: { id: id },
    create: { id, ...row },
    update: { ...row },
  })),
});

// create post upsert queries
const upsertPosts = (posts, isDraft) => {
  // populate queries with upsert sources, tags queries
  const createOrUpdate = ({ sources, tags, ...post }) => ({
    draft: isDraft,
    sources: upsertRelated(sources),
    tags: upsertRelated(tags),
    ...post,
  });

  return {
    upsert: posts.map(({ id, ...post }) => ({
      where: { id: id },
      create: createOrUpdate({ id, ...post }),
      update: createOrUpdate(post),
    })),
  };
};

// create upsert draft query
const upsertDraft = ({ id, ...draft }, isDraft = true) => {
  // populate query with upsert posts queries
  const createOrUpdate = ({ posts, ...draft }) => ({
    draft: isDraft,
    posts: upsertPosts(posts, isDraft),
    ...draft,
  });

  return {
    where: { id: id },
    create: createOrUpdate({ id, ...draft }),
    update: createOrUpdate(draft),
  };
};

export default upsertDraft;
