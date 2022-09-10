import React from "react";
import Logo from "assets/images/navbar/logo.svg";

export const Footer = () => {
	return (
		<div>
			<div></div>
			<div className="grid md:grid-cols-2 grid-cols-1 py-8">
				<div className="flex flex-col lg:pl-28 lg:pr-36 px-6">
					<img src={Logo} alt="logo" width="157" height="52" />
					<p className="font-['Poppins'] non-italic font-medium text-[14px] leading-6 text-center  mix-blend-normal opacity-80 text-white text-start pt-5">
						Project Galaxy is on the mission to build an open, collaborative credential data network.
					</p>
					<button className="text-center border-[#4f46e5] border-2 rounded md:w-2/4 w-full text-[#4f46e5] py-2 mt-5">Get the lastest update</button>
				</div>
				<div className="flex flex-col lg:pr-24 px-6">
					<div className="flex flex-row justify-around">
						<div className="flex flex-col items-center">
							<p className="font-['Poppins'] non-italic font-medium text-[14px] leading-6 text-center  mix-blend-normal opacity-80 text-white text-start pt-5">
								GALAXY</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Spaces</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Credentials</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								My NFTs</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Galaxy ID</p>
						</div>
						<div className="flex flex-col items-center">
							<p className="font-['Poppins'] non-italic font-medium text-[14px] leading-6 text-center  mix-blend-normal opacity-80 text-white text-start pt-5">
								ABOUT</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Docs</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Careers</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Brand Kit</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Press Kit</p>
						</div>
						<div className="flex flex-col items-center">
							<p className="font-['Poppins'] non-italic font-medium text-[14px] leading-6 text-center  mix-blend-normal opacity-80 text-white text-start pt-5">
								COMMUNITY</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Blog</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Twitter</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Telegram</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Discord</p>
						</div>
						<div className="flex flex-col items-center">
							<p className="font-['Poppins'] non-italic font-medium text-[14px] leading-6 text-center  mix-blend-normal opacity-80 text-white text-start pt-5">
								SUUPPORT</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Help Center</p>
							<p className="font-['Poppins'] non-italic font-light text-[14px] leading-6 text-center  mix-blend-normal opacity-60 text-white text-start pt-4">
								Contact Us</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}