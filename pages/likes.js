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
              <div
                className="flex flex-col p-4 bg-blue-200 rounded-lg"
                key={index}
              >
                <div className="flex">
                  <p className="flex-1 font-semibold text-indigo-600">
                    {post.score}
                  </p>
                  <a
                    href={`https://www.reddit.com/${post.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      id="Capa_1"
                      enableBackground="new 0 0 512 512"
                      className="flex-initial w-4 h-4"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m444.394 3.996h-285.072c-37.183 0-67.606 30.423-67.606 67.606v23.004h257.871c37.183 0 67.606 30.423 67.606 67.606v168.547h27.201c37.183 0 67.606-30.423 67.606-67.606v-191.551c0-37.184-30.423-67.606-67.606-67.606z"
                        fill="#6c7ed6"
                      />
                      <path
                        d="m396.461 91.515h-285.072c-6.836 0-13.441 1.036-19.673 2.946v.145h257.871c37.183 0 67.606 30.423 67.606 67.606v168.547h27.2c6.836 0 13.441-1.036 19.673-2.946v-168.692c.001-37.183-30.422-67.606-67.605-67.606z"
                        fill="#4f67d2"
                      />
                      <path
                        d="m352.678 91.515h-285.072c-37.183 0-67.606 30.423-67.606 67.606v191.55c0 37.183 30.423 67.606 67.606 67.606h171.096c7.335 0 12.811 6.826 11.133 13.966-4.537 19.317-11.48 39.745-21.744 60.686-4.609 9.405 5.876 18.966 14.782 13.454 25.751-15.937 62.389-42.61 93.244-80.317 4.056-4.957 10.156-7.79 16.561-7.79 37.183 0 67.606-30.423 67.606-67.606v-191.55c0-37.182-30.423-67.605-67.606-67.605z"
                        fill="#60b8fe"
                      />
                      <path
                        d="m293.618 432.243c1.677-7.141-3.798-13.966-11.133-13.966h-43.783c7.335 0 12.81 6.825 11.133 13.966-4.537 19.317-11.48 39.745-21.744 60.686-4.609 9.405 5.876 18.966 14.782 13.454 9.88-6.115 21.365-13.816 33.509-23.108 7.832-17.563 13.399-34.696 17.236-51.032z"
                        fill="#23a8fe"
                      />
                      <path
                        d="m43.783 350.671v-191.55c0-37.183 30.423-67.606 67.606-67.606h-43.783c-37.183 0-67.606 30.423-67.606 67.606v191.55c0 37.183 30.423 67.606 67.606 67.606h43.783c-37.184 0-67.606-30.422-67.606-67.606z"
                        fill="#23a8fe"
                      />
                      <g fill="#dfebfa">
                        <circle cx="93.714" cy="260.397" r="22.434" />
                        <circle cx="166.174" cy="260.397" r="22.434" />
                        <circle cx="238.633" cy="260.397" r="22.434" />
                        <circle cx="311.093" cy="260.397" r="22.434" />
                      </g>
                      <path
                        d="m93.714 260.397c0-8.302 4.514-15.546 11.217-19.425-3.301-1.91-7.129-3.009-11.217-3.009-12.39 0-22.434 10.044-22.434 22.434s10.044 22.434 22.434 22.434c4.088 0 7.917-1.099 11.217-3.009-6.704-3.879-11.217-11.123-11.217-19.425z"
                        fill="#b1dbfc"
                      />
                      <path
                        d="m166.174 260.397c0-8.302 4.514-15.546 11.217-19.425-3.301-1.91-7.129-3.009-11.217-3.009-12.39 0-22.434 10.044-22.434 22.434s10.044 22.434 22.434 22.434c4.088 0 7.916-1.099 11.217-3.009-6.704-3.879-11.217-11.123-11.217-19.425z"
                        fill="#b1dbfc"
                      />
                      <path
                        d="m238.633 260.397c0-8.302 4.514-15.546 11.217-19.425-3.301-1.91-7.13-3.009-11.217-3.009-12.39 0-22.434 10.044-22.434 22.434s10.044 22.434 22.434 22.434c4.088 0 7.917-1.099 11.217-3.009-6.703-3.879-11.217-11.123-11.217-19.425z"
                        fill="#b1dbfc"
                      />
                      <path
                        d="m311.093 260.397c0-8.302 4.513-15.546 11.217-19.425-3.301-1.91-7.13-3.009-11.217-3.009-12.39 0-22.434 10.044-22.434 22.434s10.044 22.434 22.434 22.434c4.088 0 7.917-1.099 11.217-3.009-6.704-3.879-11.217-11.123-11.217-19.425z"
                        fill="#b1dbfc"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex">
                  <p className="flex-1 pr-2 font-semibold ">{post.title}</p>
                  <button
                    className={`flex-initial focus:outline-none`}
                    onClick={() => {
                      var joined = likes.concat({
                        title: post.title,
                        id: post.id,
                      });
                      setLikes(joined);
                      localStorage.setItem("likes", JSON.stringify(joined));
                    }}
                  >
                    <svg
                      id="color"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      className="h-4 transform hover:scale-125 "
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z"
                        fill="#f44336"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              // <div className="flex p-4 bg-blue-200 rounded-lg" key={index}>
              //   <p className="flex-1 pr-2">{post.title}</p>
              //   <button
              //     className={`flex-initial focus:outline-none`}
              //     onClick={() => {
              //       likedPosts.splice(index, 1);
              //       localStorage.setItem("likes", JSON.stringify(likedPosts));
              //       Router.reload(window.location.pathname);
              //     }}
              //   >
              //     <svg
              //       viewBox="0 0 512 512"
              //       width="512pt"
              //       xmlns="http://www.w3.org/2000/svg"
              //       className="w-4 h-4 transform hover:scale-125 "
              //     >
              //       <path
              //         d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
              //         fill="#f44336"
              //       />
              //       <path
              //         d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
              //         fill="#fafafa"
              //       />
              //     </svg>
              //   </button>
              // </div>
            ))
          : "Loading"}
      </div>
    </Layout>
  );
};

export default likes;
