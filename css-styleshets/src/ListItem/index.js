import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


export function ListHead({ children }) {
	return (
		<div className="ListHead">
			{
				Children.toArray(children).map((child, key) => (
					<span key={`child-${key}`} className="Ceil">{child}</span>
				))
			}
		</div>
	)
}

export default function ListItem({ id, first_name, last_name, email }) {
	return (
		<div className="ListItem">
			<span className="Ceil">{ id }</span>
			<span className="Ceil">{ first_name } { last_name }</span>
			<span className="Ceil">{ email }</span>
			<Link to={`/item/${id}`} className="Ceil">More</Link>
		</div>
	)
}
