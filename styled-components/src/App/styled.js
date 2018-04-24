import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Header = styled.div`
	padding: 20px;    
	background-color: lightgray;
`;

export const Body = styled.div`
	padding: 20px;    
`;

export const Link = styled(RouterLink)`
	margin-right: 10px;
	color: #000;
	text-decoration: none;
`;
