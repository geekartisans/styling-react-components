import React, { Component } from 'react';
import NotFound from './../NotFound';

// users data 
import users from './../users.json';


export default class Item extends Component {
	getUser() {
		const { match: { params: { id = 0 } } } = this.props;
		const user = users.find((u) => parseInt(u.id, 10) === parseInt(id, 10));
		
		return user;
	}
	render() {
		const user = this.getUser();

		if (!user) return <NotFound />;

		return (
			<div className="Item">
				<div>
					<span>#ID</span> : <span>{ user.id }</span>
				</div>
				<div>
					<span>Email</span> : <span>{ user.email }</span>
				</div>
				<div>
					<span>First Name</span> : <span>{ user.first_name }</span>
				</div>
				<div>
					<span>Last Name</span> : <span>{ user.last_name }</span>
				</div>
			</div>
		);
	}
}
