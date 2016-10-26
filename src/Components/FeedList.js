import React, { Component } from 'react';
import FeedItem from './FeedItem';

class FeedList extends Component {
	render() {

		var feedItems = this.props.items.map(function(item){
			return <FeedItem title={item.title} desc={item.description} votecount={item.votecount} key={item.key} />
		});

		return (
			<ul className="news-list">
				{feedItems}
			</ul>
		);
	}
}

export default FeedList;