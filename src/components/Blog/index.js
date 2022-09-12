import React from "react";
import FollowIcon from "assets/images/utils/followIcon.svg";
import LikeIcon from "assets/images/utils/likeIcon.svg";
import CommentIcon from "assets/images/utils/commentIcon.svg";
import ContactIcon from "assets/images/utils/contactIcon.svg";
import ShareIcon from "assets/images/utils/shareIcon.svg";

export const Blog = (props) => {
	return (
		<div className="flex flex-col">
			<div className="flex justify-between blogHead">
				<div className="flex">
					<img src={props.avatar} alt="Avatar" width="50" height="50" />
					<div className="flex flex-col ml-4">
						<p className="blogHead__author">{props.author}</p>
						<p className="blogHead__intro">{props.intro}</p>
						<p className="blogHead__date">{props.date}</p>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<p className="font-['Poppins'] non-italic font-semibold text-sm text-center text-[#7af7ff]">Follow</p>
					<img src={FollowIcon} alt="Follow" width="15" height="15" />
				</div>
			</div>
			<div className="pt-5 blogBody">
				<p className="blogBody__content">
					{props.children}
				</p>
			</div>
			<div className="mt-5 pt-5 blogFooter">
				<div className="flex gird-cols-4 items-center justify-around">
					<div className="flex">
						<p className="blogFooter__title pr-2">Like&nbsp;{props.like}</p>
						<img src={LikeIcon} alt="like" width="16" height="16" />
					</div>
					<div className="flex">
						<p className="blogFooter__title pr-2">Comment&nbsp;{props.comment}</p>
						<img src={CommentIcon} alt="comment" width="16" height="16" />
					</div>
					<div className="flex">
						<img src={ContactIcon} alt="contact" width="16" height="16" />
					</div>
					<div className="flex">
						<p className="blogFooter__title pr-2">Share&nbsp;</p>
						<img src={ShareIcon} alt="share" width="16" height="16" />
					</div>
				</div>
			</div>
		</div>
	);
};