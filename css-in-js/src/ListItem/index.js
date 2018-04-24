import React, { Children } from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

function Header({ children }) {
	return (
		<div style={styles.ListHead}>
			{
				Children.toArray(children).map((child, key) => (
					<span key={`child-${key}`} style={styles.Ceil}>{child}</span>
				))
			}
		</div>
	)
}

function ListItem({ id, first_name, last_name, email }) {
	return (
		<div style={styles.ListItem}>
			<span style={[styles.Ceil]}>{ id }</span>
			<span style={styles.Ceil}>{ first_name } { last_name }</span>
			<span style={styles.Ceil}>{ email }</span>
			<Link to={`/item/${id}`} style={styles.Ceil}>More</Link>
		</div>
	)
}

export const ListHead = Radium(Header);
export default Radium(ListItem);

const styles = {
  ListItem: {
    display: 'flex',
  },
  ListHead: {
    display: 'flex',
    fontWeight: 700,
    padding: '5px 0',
  },
  Ceil: {
		display: 'flex',
		flexBasis: '25%',
		boxSizing: 'border-box',
		padding: '0 5px',
    textOverflow:  'ellipsis',
    firstChild :{
			flexBasis: '5%'
		},
		lastChild: {
			flexBasis: '15%',
		}
  },
  W5:{
    flexBasis: '5%'
  },
  W15:{
    flexBasis: '15%'
  }
};
