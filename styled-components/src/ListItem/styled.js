import styled from 'styled-components';


export const ListItemWrapper = styled.div`
	display: flex;
`;

export const ListHeadWrapper = styled(ListItemWrapper)`
	font-weight: 700;
	padding: 5px 0;
`;

export const Ceil = styled.span`
	display: flex;
	flex-basis: 40%;
	box-sizing: border-box;
	padding: 0 5px;
	text-overflow: ellipsis;

	&:first-child {
		flex-basis: 5%
	}

	&:last-child {
		flex-basis: 15%
	}
`;
