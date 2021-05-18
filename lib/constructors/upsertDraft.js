const upsertRelated = (rows) => ({
  upsert: rows.map(({ id, ...row }) => ({
    where: { id: id },
    update: row,
    create: row,
  })),
});

const upsertPosts = (posts) => {
  const createOrUpdate = ({ sources, tags, ...post }) => ({
    sources: upsertMany(sources),
    tags: upsertMany(tags),
    ...post,
  });
  return {
    upsert: posts.map(({ id, post }) => ({
      where: { id: id },
      create: createOrUpdate(post),
      update: createOrUpdate(post),
    })),
  };
};

const upsertDraft = ({ id, ...draft }) => {
  const createOrUpdate = ({ posts, ...draft }) => ({
    posts: upsertPosts(posts),
    ...draft,
  });
  return {
    where: { id: id },
    create: createOrUpdate(draft),
    update: createOrUpdate(draft),
  };
};

export default upsertDraft;
