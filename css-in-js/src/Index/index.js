import React from 'react';
import ListItem, { ListHead } from './../ListItem';

// users data 
import users from './../users.json';


export default function Index() {
	return (
		<div className="Index">
			<ListHead>{['Id', 'Name', 'Email', 'Link']}</ListHead>		
			{
				users.map((user) => (
					<ListItem
						key={`user-${user.id}`}
						{ ...user}
					/>
				))
			}
		</div>
	)
}
