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
      id: post.id,
      date: date,
      draft: true,
      slug: toSlug(date, post.title),
      title: post.title,
      text: text.replace(/<p><br><\/p>/g, ""),
      ...(anySources && { sources: createSources(filteredSources) }),
      tags: connectOrCreateTags(tags),
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
        date: date,
        slug: toSlug(date, post.title),
        draft: publish ? false : true,
        title: post.title,
        text: text.replace(/<p><br><\/p>/g, ""),
        ...(anySources && { sources: createSources(filteredSources) }),
        tags: connectOrCreateTags(tags),
      },
      update: {
        date: date,
        slug: toSlug(date, post.title),
        ...(publish && { draft: false }),
        title: post.title,
        text: text.replace(/<p><br><\/p>/g, ""),
        ...(anySources && { sources: upsertSources(filteredSources) }),
        tags: connectOrCreateTags(tags),
      },
    };
  }),
});

// create upsert draft query
const upsertDraft = ({ id, date, posts, ...draft }, publish = false) => ({
  where: { id: id },
  create: {
    id: id,
    date: date,
    slug: toSlug(date, ""),
    draft: publish ? false : true,
    subject: draft.subject,
    intro: draft.intro.replace(/<p><br><\/p>/g, ""),
    posts: createPosts(date, posts),
    outro: draft.outro.replace(/<p><br><\/p>/g, ""),
  },
  update: {
    date: date,
    slug: toSlug(date, ""),
    ...(publish && { draft: false }),
    subject: draft.subject,
    intro: draft.intro.replace(/<p><br><\/p>/g, ""),
    posts: upsertPosts(date, posts, publish),
    outro: draft.outro.replace(/<p><br><\/p>/g, ""),
  },
  include: {
    posts: {
      include: {
        sources: true,
        tags: true,
      },
    },
  },
});

export default upsertDraft;
