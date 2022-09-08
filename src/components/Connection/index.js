import React from "react";
import { ConnectButton } from "components/Button/ConnectButton";

export const Connection = (props) => {
	return (
		<div className="connection mx-5 my-2 flex flex-col items-center justify-center">
			<div className="connection__area">
				<img src={props.avatar} alt="avatar" width="48" height="48" className="pt-4 m-auto" />
				<p className="connection__name m-auto pt-2">{props.name}</p>
				<p className="connection__job m-auto p-3">{props.job}</p>
				<ConnectButton />
			</div>
		</div>
	);
};