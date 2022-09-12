import React from "react";
import Divider from "assets/images/utils/divider.svg";

export const ProfileCard = (props) => {
	return (
		<div className="bg-[#1C1B2E] rounded md:mx-5 mx-0 my-4">
			<div className="flex flex-col items-center">
				<img src={props.avatar} alt="Profile Avatar" width="86" height="86" className="pt-4" />
				<p className="font-['Poppins'] non-italic font-semibold xl:text-lg text-base text-center text-white pt-4">{props.name}</p>
				<p className="font-['Poppins'] non-italic font-normal xl:text-base text-xs px-1 text-center text-white mix-blend-normal opacity-80 pt-3">{props.job}</p>
				<img src={Divider} alt="Divider" className="pt-4" />
				<div className="flex flex-col justify-center items-center pt-4 px-2">
					<div className="flex items-center">
						<img src={props.thumbnail} alt="University" width="26" height="26" className="xl:mr-0 lg:mr-2 mr-6" />
						<p className="font-['Poppins'] non-italic font-normal  xl:text-sm text-xs text-white mix-blend-normal opacity-80">Tsinghua University</p>
					</div>
					<button className="flex justify-center my-2 py-2 px-2 border-solid border-[0.57971px] border-[#7AF7FF] font-['Poppins'] non-italic font-normal text-xs text-center text-[#7AF7FF] w-full">Connect</button>
				</div>
			</div>
		</div>
	)
}