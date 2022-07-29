const Tweet = ({
  userIcon,
  author,
  content,
  username,
  editTweet,
  saveTweet,
  TweetEdit,
}) => {
  return (
    <li className="flex px-4 py-6 gap-4 mb-5 border-b ">
      <img className="w-16 h-16 rounded-full" src={userIcon} alt="pp" />

      <div className="flex flex-col w-full ">
        <div className="flex gap-1">
          <h2 className="font-bold  py-1">{author} </h2>

          <h2 className=" py-1">@{author} </h2>
        </div>
        <p className=" py-1 "> {content}</p>
      </div>
      {author === username ? (
        <button
          onClick={(e) => {
            editTweet(e);
          }}
          className="text-md bg-[#44ACF3] hover:bg-[#1A8CD8] text-white px-4 py-2 rounded-lg font-bold rounded-3xl h-min"
        >
          Edit
        </button>
      ) : null}
      {author === username && TweetEdit ? (
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
};

export default Tweet;
