import React, { Component } from 'react';
import ShowAddButton from './ShowAddButton';
import FeedForm from './FeedForm';
import FeedList from './FeedList';

var feedItems = [
	{key: '1', title: 'Realtime Data', description: 'Firebase is cool', votecount: 49 },
	{key: '2', title: 'Noel', description: 'Firebase is awesome', votecount: 50 },
	{key: '3', title: 'Joel', description: 'Firebase is high', votecount: 51 }
];

class Feed extends Component {

	constructor(props){
		super(props);
		this.data = feedItems;
		this.state = {
			items : feedItems,
			formDisplayed : false
		};
		this.onToggleForm = this.onToggleForm.bind(this);
	}

	onToggleForm() {
		console.log("Noel");
		this.setState({
			formDisplayed: !this.state.formDisplayed
		})
	}

	render() {
		return (
			<div>
				<div className="container">
					<ShowAddButton onToggleForm={this.onToggleForm} displayed={this.state.formDisplayed} />
				</div>

				<FeedForm />
				<br/>
				<br/>

				<FeedList items={this.state.items}/>
			</div>
		);
	}
}

export default Feed;

