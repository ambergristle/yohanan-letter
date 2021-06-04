import Head from "next/head";

import getPosts from "../../utils/queries/getPosts";

import PostList from "../../components/Archive/PostList";

const Archive = ({ posts }) => {
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
  // pass posts or null to component as props
  const posts = (await getPosts()) || null;

  return {
    props: { posts },
  };
};

export default Archive;
