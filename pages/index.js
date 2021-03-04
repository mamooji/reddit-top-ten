import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState();
  const [likes, setLikes] = useState([]);

  // const getLikes = useCallback((getEm) => {
  //   setLikes(getEm);
  // }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     var likedPosts = JSON.parse(localStorage.getItem("likes"));
  //     getLikes(likedPosts);
  //     console.log(likedPosts);
  //   } else {
  //     console.log("gang");
  //   }
  // });

  const getData = (subreddit = "AskReddit") => {
    const url = `https://www.reddit.com/r/${subreddit}/top.json?limit=10`;
    axios
      .get(url)
      .then(({ data }) => {
        setData(data.data.children);
      })
      .catch(({ err }) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="p-4 text-4xl font-bold text-center ">
          Muhammad Mamooji{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            7810559
          </a>
        </h1>
        <div className="flex flex-col w-full p-4 space-y-4">
          <form
            className="flex flex-col space-y-2"
            action="#"
            onSubmit={(e) => {
              getData(searchTerm);
            }}
          >
            <input
              className="px-4 py-3 leading-tight text-gray-700 border border-gray-200 rounded appearance-none bg-gray-50 focus:bg-white focus:border-gray-500 focus:outline-none"
              type="text"
              placeholder="Enter a sub-reddit"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <input
              className="inline-block px-8 py-4 font-semibold leading-none text-white bg-indigo-600 rounded shadow hover:bg-indigo-700"
              type="submit"
              value="Submit"
            />
          </form>
          {data
            ? data.map((post, index) => (
                <div className="flex p-4 bg-blue-200 rounded-lg" key={index}>
                  <p className="flex-1 pr-2">{post.data.title}</p>
                  <button
                    className={`flex-initial focus:outline-none`}
                    onClick={() => {
                      var joined = likes.concat({
                        title: post.data.title,
                        id: post.data.id,
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
              ))
            : data}
        </div>
      </div>
    </Layout>
  );
};
export default Home;
