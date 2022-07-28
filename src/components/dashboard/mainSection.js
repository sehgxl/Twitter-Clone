import React from "react";
import { useState } from "react";
import Feed from "../../feed";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
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
          <UserIcon className="w-12 h-12 border-2 border-black rounded-full" />
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

      <section className="py-6 border-t w-full px-4 ">
        <ul>
          {JSON?.parse(localStorage.getItem("Feed"))
            .reverse()
            .map((tweet) => {
              return (
                <li className="flex gap-4 mb-5  ">
                  <UserIcon className="w-12 h-12 border-2 border-black rounded-full" />
                  <div className="flex flex-col w-full ">
                    <h2 className="font-bold px-2 py-1">@{tweet.author} </h2>
                    <p className="px-2 py-1 "> {tweet.content}</p>
                  </div>
                  {tweet.author === username ? (
                    <button
                      onClick={(e) => {
                        editTweet(e);
                      }}
                      className="text-md bg-[#44ACF3] hover:bg-[#1A8CD8] text-white px-4 py-2 rounded-lg font-bold rounded-3xl h-min"
                    >
                      Edit
                    </button>
                  ) : null}
                  {tweet.author === username && TweetEdit ? (
                    <button
                      onClick={(e) => {
                        saveTweet(e);
                      }}
                      className="text-md bg-[#44ACF3] hover:bg-[#1A8CD8] text-white px-4 py-2 rounded-lg font-bold rounded-3xl h-min"
                    >
                      Save
                    </button>
                  ) : null}
                </li>
              );
            })}
        </ul>
      </section>
    </section>
  );
};

export default MainSection;
