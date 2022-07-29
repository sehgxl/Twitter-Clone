import React, { useEffect } from "react";
import { useState } from "react";
import Feed from "../../feed";
import userIcon from "../../assets/pp.jpg";
import Tweet from "./tweet";
const MainSection = ({ username }) => {
  const [TweetContent, SetTweetContent] = useState("");
  const [TweetEdit, setTweetEdit] = useState(false);
  function editTweet(e) {
    setTweetEdit(true);
    const p = e.target.parentElement.querySelector("p");
    p.setAttribute("contenteditable", true);
  }
  function saveTweet(e) {
    setTweetEdit(false);
    const p = e.target.parentElement.querySelector("p");
    p.setAttribute("contenteditable", false);
  }
  let postIDCount = 0;
  useEffect(() => {}, [postIDCount]);
  function postTweet() {
    postIDCount++;
    const today = new Date();
    const tweet = {
      postID: postIDCount,
      author: username,
      content: TweetContent,
      createdOn: today,
    };
    Feed.push(tweet);
    localStorage.setItem("Feed", JSON.stringify(Feed));
    SetTweetContent("");
  }
  return (
    <section className="flex flex-col items-start justify-start py-5 border ">
      <h1 className="font-bold text-3xl mb-8 px-4">Latest Tweets</h1>
      <section className="flex flex-col  w-full py-4 px-4">
        <div className="flex gap-2">
          {/* <UserIcon className="w-12 h-12 border-2 border-black rounded-full" /> */}
          <img className="w-16 h-16 rounded-full" src={userIcon} alt="pp" />
          <input
            type="text"
            value={TweetContent}
            className="text-lg w-full px-4 py-2 focus:outline-none placeholder:text-gray-400 placeholder:font-medium"
            placeholder="What's happening?"
            onChange={(e) => {
              SetTweetContent(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              postTweet();
            }}
            className="text-lg bg-[#44ACF3] hover:bg-[#1A8CD8] text-white px-4 py-2 rounded-3xl font-bold"
          >
            Tweet
          </button>
        </div>
      </section>

      <section className=" border-t w-full ">
        <ul>
          {JSON.parse(localStorage.getItem("Feed"))
            ?.reverse()
            .map((tweet) => {
              return (
                <Tweet
                  userIcon={userIcon}
                  author={tweet.author}
                  content={tweet.content}
                  username={username}
                  editTweet={editTweet}
                  saveTweet={saveTweet}
                  TweetEdit={TweetEdit}
                />
              );
            })}
        </ul>
      </section>
    </section>
  );
};

export default MainSection;
