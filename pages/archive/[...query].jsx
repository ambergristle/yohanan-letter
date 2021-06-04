import Head from "next/head";

import getPosts from "../../utils/queries/getPosts";

import PostList from "../../components/Archive/PostList";

const Archive = ({ posts }) => {
  posts = JSON.parse(posts);
  const letter = false;

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
  // query.length can be used to identify letter

  // pass posts or null to component as props
  // const letter = (await getLetter(slug)) || null;
  const posts = (await getPosts(slug)) || null;

  // return letter || posts;
  return { props: { posts } };
};

export default Archive;
