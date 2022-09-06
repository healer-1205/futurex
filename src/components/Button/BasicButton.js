import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.childrenColor};
	margin-top: ${(props) => props.marginTop};
	border-color: ${(props) => props.borderColor};
	width: 256px;
	height: 40px;
	border-radius: 4px;
	border: 1px solid;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	text-align: center;
`;

export const BasicButton = (props) => {
	return (
		<Button childrenColor={props.color} marginTop={props.marginTop} borderColor={props.borderColor} className="mx-auto">
			{props.children}
		</Button>
	);
};