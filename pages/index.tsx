import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Layout from '../components/common/Layout/Layout';
import Login from '../components/ui/Login/Login';
import MainFeed from '../components/ui/MainFeed/MainFeed';
import Sidebar from '../components/ui/Sidebar/Sidebar';
import Widget from '../components/ui/Widget/Widget';
import { fetchPostApi } from '../utils/FetchApi/FetchPosts';
import { Facebook } from '../utils/typing';

export type Props = {
  posts: Facebook[];
};

const Home = ({ posts }: Props) => {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <Layout title="">
      <div className="mx-auto max-w-7xl p-2 md:px-5">
        {/* SideBar */}

        <div className="grid grid-cols-12 gap-4 py-4">
          <Sidebar />
          {/* MainFeed */}
          <MainFeed posts={posts} />

          {/* Widgets */}
          <Widget />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetchPostApi();
  
  return {
    props: {
      posts,
    },
  };
};
