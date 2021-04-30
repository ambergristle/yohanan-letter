import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (

  )
}


export async getServerSideProps = (context) => {
  return {
    props: {}, // will be passed to the page component as props
  }
}


const response = await axios.get(`/api/posts/${postId}`)
const post = await response.json()

if (!post) return { notFound: true };

return { props: { post } }

export default Post;
