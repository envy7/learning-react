import React, { Component } from 'react';

class FeedItem extends Component {
	render() {
		return (
			<li className="list-grp row  card-panel ">
				<div className="col m11">
					<div className="row"><h4>{this.props.title}</h4></div>
					<div className="row"><p>{this.props.desc}</p></div>
				</div>
				<div className="col m1">
					<a className="row right-end waves-effect waves-indigo"><i className="material-icons">expand_less</i></a>
					<div className="row right-end"><span className="votecount z-depth-1">{this.props.votecount}</span></div>
					<a className="row right-end waves-effect waves-indigo"><i className="material-icons">expand_more</i></a>
				</div>
				
				<span className="counters">
					
					
				</span>
			</li>
		);
	}
} 

export default FeedItem;