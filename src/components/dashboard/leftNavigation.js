import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as NotifIcon } from "../../assets/bell.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmark.svg";
import { ReactComponent as HashtagIcon } from "../../assets/hashtag.svg";
import { ReactComponent as ListIcon } from "../../assets/lists.svg";
import { ReactComponent as MoreIcon } from "../../assets/more.svg";
import { ReactComponent as MsgIcon } from "../../assets/msg.svg";
import { ReactComponent as TWIcon } from "../../assets/tw.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { useNavigate } from "react-router-dom";
const iconStyle = { className: "w-7 " };
const iconStyleTW = {
  className: "w-10 hover:cursor-pointer fill-[#44ACF3] hover:fill-[#1A8CD8]",
};
const leftNavButtons = [
  { name: "Home", icon: <HomeIcon {...iconStyle} /> },
  { name: "Explore", icon: <HashtagIcon {...iconStyle} /> },
  { name: "Notifications", icon: <NotifIcon {...iconStyle} /> },
  { name: "Messages", icon: <MsgIcon {...iconStyle} /> },
  { name: "Bookmarks", icon: <BookmarkIcon {...iconStyle} /> },
  { name: "Lists", icon: <ListIcon {...iconStyle} /> },
  { name: "Profile", icon: <UserIcon {...iconStyle} /> },
  { name: "More", icon: <MoreIcon {...iconStyle} /> },
];

const LeftNav = () => {
  const Navigate = useNavigate();
  return (
    <section className="flex flex-col items-center py-5 px-10">
      <div className="flex flex-col gap-3">
        <div className="px-4">
          <TWIcon
            {...iconStyleTW}
            onClick={() => {
              Navigate("/");
            }}
          />
        </div>
        {leftNavButtons.map((btn) => {
          return (
            <div className="flex gap-4 text-lg hover:bg-[#E7E7E8] px-4 py-2 rounded-3xl hover:cursor-pointer ">
              {btn.icon}
              <button>{btn.name}</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LeftNav;
