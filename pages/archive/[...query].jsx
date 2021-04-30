import Head from "next/head";

import getPosts from "../../lib/posts/getPosts";

import PostList from "../../components/Archive/PostList";

const Archived = ({ posts }) => {
  posts = JSON.parse(posts);

  return (
    <>
      <Head>
        <meta name="description" content="No Ads. No Fees. No Bullshit." />
      </Head>
      <PostList posts={posts} />
    </>
  );
};

// get posts server-side
export const getServerSideProps = async (context) => {
  const { query } = context.query;

  const slug = query.join("/");

  // pass posts or null to component as props
  const posts = (await getPosts(slug)) || null;

  return {
    props: { posts },
  };
};

export default Archived;
