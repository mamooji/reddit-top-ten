import axios from "axios";
export default async (req, res) => {
  const url = "https://www.reddit.com/r/redditdev/top.json?limit=10";
  await axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json({ data });
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
};
