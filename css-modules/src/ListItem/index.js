import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';


export function ListHead({ children }) {
	return (
		<div className={styles.ListHead}>
			{
				Children.toArray(children).map((child, key) => (
					<span key={`child-${key}`} className={styles.Ceil}>{child}</span>
				))
			}
		</div>
	)
}

export default function ListItem({ id, first_name, last_name, email }) {
	return (
		<div className={styles.ListItem}>
			<span className={styles.Ceil}>{ id }</span>
			<span className={styles.Ceil}>{ first_name } { last_name }</span>
			<span className={styles.Ceil}>{ email }</span>
			<Link to={`/item/${id}`} className={styles.Ceil}>More</Link>
		</div>
	)
}
