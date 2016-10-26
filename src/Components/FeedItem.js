import React, { Component } from 'react';

class FeedItem extends Component {
	render() {
		return (
			<li className="list-grp">
				<span className="votecount">{this.props.votecount}</span>
				<h4>{this.props.title}</h4>
				<span>{this.props.desc}</span>
				<span className="counters">
					<button id="up" className="btn">&uarr;</button>
					<button id="down" className="btn">&darr;</button>
				</span>
			</li>
		);
	}
} 

export default FeedItem;