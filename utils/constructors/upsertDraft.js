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

const stripParams = (url) => url.replace(/\?.*$/, "");

// filter "sources" with no title or href
const filterSources = (sources) =>
  sources.filter((source) => source.title && source.href);

// create list of sources (for post.create query)
const createSources = (sources) => ({
  create: sources.map(({ href, ...source }) => ({
    href: stripParams(href),
    ...source,
  })),
});

// upsert list of sources (for post.upsert query)
const upsertSources = (sources) => ({
  upsert: sources.map(({ id, href, ...source }) => ({
    where: { id: id },
    create: { id, href: stripParams(href), ...source },
    update: { href: stripParams(href), ...source },
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
  create: posts.map(({ text, sources, tags, ...post }) => {
    const filteredSources = filterSources(sources);
    const anySources = filteredSources.length > 0;

    return {
      text: text.replace(/<p><br><\/p>/g, ""),
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
  upsert: posts.map(({ id, text, sources, tags, ...post }) => {
    const filteredSources = filterSources(sources);
    const anySources = filteredSources.length > 0;

    return {
      where: { id: id },
      create: {
        id: id,
        text: text.replace(/<p><br><\/p>/g, ""),
        ...(anySources && { sources: createSources(filteredSources) }),
        tags: connectOrCreateTags(tags),
        ...post,
        draft: publish ? false : true,
        date: date,
        slug: toSlug(date, post.title),
      },
      update: {
        text: text.replace(/<p><br><\/p>/g, ""),
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
    draft: publish ? false : true,
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
