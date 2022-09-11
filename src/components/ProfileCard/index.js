import React from "react";
import Divider from "assets/images/utils/divider.svg";

export const ProfileCard = (props) => {
	return (
		<div className="bg-[#1C1B2E] rounded mx-5 bg-[url('assets/images/network/CardImage.png')] bg-no-repeat bg-top bg-[length:100%_auto]">
			<div className="flex flex-col items-center">
				<img src={props.avatar} alt="Profile Avatar" width="86" height="86" className="pt-4" />
				<p className="font-['Poppins'] non-italic font-semibold text-lg text-center text-white pt-4">{props.name}</p>
				<p className="font-['Poppins'] non-italic font-normal text-base text-center text-white mix-blend-normal opacity-80 pt-3">{props.job}</p>
				<img src={Divider} alt="Divider" className="pt-4" />
				<div className="flex justify-center items-center pt-4">
					<img src={props.thumbnail} alt="University" width="26" height="26" />
					<p className="font-['Poppins'] non-italic font-normal text-sm text-white mix-blend-normal opacity-80">Tsinghua University</p>
				</div>
			</div>
		</div>
	)
}