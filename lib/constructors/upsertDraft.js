const upsertRelated = (rows) => ({
  connectOrCreate: rows.map(({ id, ...row }) => ({
    where: { id: id },
    create: { id, ...row },
  })),
});

const upsertPosts = (posts) => {
  const createOrUpdate = ({ sources, tags, ...post }) => ({
    sources: upsertRelated(sources),
    tags: upsertRelated(tags),
    ...post,
  });
  return {
    connectOrCreate: posts.map(({ id, ...post }) => ({
      where: { id: id },
      create: createOrUpdate({ id, ...post }),
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
    create: createOrUpdate({ id, ...draft }),
    update: createOrUpdate(draft),
  };
};

export default upsertDraft;
