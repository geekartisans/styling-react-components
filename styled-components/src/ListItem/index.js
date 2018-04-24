import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { ListItemWrapper, ListHeadWrapper, Ceil } from './styled';


export function ListHead({ children }) {
	return (
		<ListHeadWrapper>
			{
				Children.toArray(children).map((child, key) => (
					<Ceil key={`child-${key}`}>{child}</Ceil>
				))
			}
		</ListHeadWrapper>
	)
}

export default function ListItem({ id, first_name, last_name, email }) {
	return (
		<ListItemWrapper>
			<Ceil>{ id }</Ceil>
			<Ceil>{ first_name } { last_name }</Ceil>
			<Ceil>{ email }</Ceil>
			<Ceil><Link to={`/item/${id}`}>More</Link></Ceil>
		</ListItemWrapper>
	)
}
