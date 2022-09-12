import React from "react";
import styled from "styled-components";

const Button = styled.button`
	display: flex;
  border: 0.57971px solid #7AF7FF;
	border-radius: 2px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 14px;
	text-align: center;
	color: #7AF7FF;
`;

export const ConnectButton = () => {
	return (
		<Button className="m-auto my-2 py-1 xl:px-9 lg:px-5 px-9">Connect</Button>
	)
}