import React from "react";
import Avatar from "assets/images/profile/avatar.svg";
import Person from "assets/images/profile/person.svg";
import CopyIcon from "assets/images/profile/copy.svg";
import Polygon from "assets/images/profile/polygon.svg";

export const ViewProfile = () => {
	return (
		<div className="pt-7 xl:px-36 lg:px-10 px-8 bg-[url('assets/images/background/Header.png')] bg-no-repeat bg-top bg-[length:100%_auto]">
			<div className="grid lg:grid-cols-3 grid-cols-1">
				<div className="col-span-2">
					<div className="flex">
						<img src={Avatar} alt="Avatar" width="180" height="180" className="z-10" />
						<div className="flex flex-col ml-8">
							<div className="flex">
								<p className="font-[Poppins] non-italic font-bold text-3xl text-white">fluffy994</p>
								<div className="bg-[#7000ff99] rounded-t-[16.1151px] rounded-br-[16.1151px] rounded-bl-[1.79057px] border-[1px] border-solid border-[#45ffed] ml-4">
									<p className="px-5 py-2 font-[Poppins] non-italic font-medium text-sm text-center text-white">I am hiring</p>
								</div>
							</div>
							<p className="font-[Poppins] non-italic font-normal text-lg text-white opacity-80 mix-blend-normal mt-1">
								Product Manager at FutureX Cambridge, MA, US
							</p>
							<img src={Person} alt="Person" width="14" height="22" />
						</div>
					</div>
				</div>
				<div className="col-span-1">
					<div className="flex justify-around">
						<button className="bg-[#7000FF] rounded-sm px-7 py-3 font-[Poppins] non-italic font-semibold text-base text-center text-white">Connect</button>
						<button className="bg-[#0C0E11] rounded-sm px-7 py-3 font-[Poppins] non-italic font-semibold text-base text-center text-white border-solid border-white border-[0.9px]">Message</button>
					</div>
				</div>
			</div>
			<div className="bg-[#141422] opacity-70 mix-blend-normal rounded-[3.6px] grid grid-cols-3 ml-24 mt-[-80px]">
				<div className="flex flex-col items-center my-3">
					<p className="font-[Poppins] non-italic font-bold text-2xl text-center text-[#F2F2F2]">8888</p>
					<p className="font-[Poppins] non-italic font-normal text-base text-center text-white mix-blend-normal opacity-60">Connections</p>
				</div>
				<div className="flex flex-col items-center my-3 border-x-2 border-solid mix-blend-normal border-[#ffffff4d]">
					<p className="font-[Poppins] non-italic font-bold text-2xl text-center text-[#F2F2F2]">18</p>
					<p className="font-[Poppins] non-italic font-normal text-base text-center text-white mix-blend-normal opacity-60">Badges</p>
				</div>
				<div className="flex flex-col items-center my-3">
					<p className="font-[Poppins] non-italic font-bold text-2xl text-center text-[#F2F2F2]">16</p>
					<p className="font-[Poppins] non-italic font-normal text-base text-center text-white mix-blend-normal opacity-60">Referrals</p>
				</div>
			</div>
			<div className="flex items-center justify-between mt-4">
				<div className="flex">
					<p className="font-[Poppins] non-italic font-normal text-lg text-white">futurex.dev/lihua666…</p>
					<img src={CopyIcon} alt="CopyIcon" width="18" height="18" className="mx-4" />
				</div>
				<div className="flex">
					<img src={Polygon} alt="Polygon" width="52" height="52" className="mx-2" />
					<img src={Polygon} alt="Polygon" width="52" height="52" className="mx-2" />
				</div>
			</div>
		</div>
	)
}