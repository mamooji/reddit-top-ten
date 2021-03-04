import Layout from "../components/Layout";
import Head from "next/head";
import Router from "next/router";
const likes = () => {
  var likedPosts = [];

  // useffect(() => {
  //   localStorage.setItem("likes", JSON.stringify(likedPosts));
  // }, []);

  if (typeof window !== "undefined") {
    likedPosts = JSON.parse(localStorage.getItem("likes"));
    console.log(likedPosts);
  } else {
    console.log("gang");
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="p-4 text-4xl font-bold text-center ">
          Your Liked <a className="text-blue-600 pointer-events-none">Posts</a>
        </h1>
      </div>

      <div className="flex flex-col w-full p-4 space-y-4">
        {likedPosts
          ? // ? likedPosts.map((post, index) => console.log(post.title))
            likedPosts.map((post, index) => (
              <div className="flex p-4 bg-blue-200 rounded-lg" key={index}>
                <p className="flex-1 pr-2">{post.title}</p>
                <button
                  className={`flex-initial focus:outline-none`}
                  onClick={() => {
                    likedPosts.splice(index, 1);
                    localStorage.setItem("likes", JSON.stringify(likedPosts));
                    Router.reload(window.location.pathname);
                  }}
                >
                  <svg
                    viewBox="0 0 512 512"
                    width="512pt"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transform hover:scale-125 "
                  >
                    <path
                      d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                      fill="#f44336"
                    />
                    <path
                      d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                      fill="#fafafa"
                    />
                  </svg>
                </button>
              </div>
            ))
          : "Loading"}
      </div>
    </Layout>
  );
};

export default likes;
