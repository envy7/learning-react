import React, { Component } from 'react';
import ShowAddButton from './ShowAddButton';
import FeedForm from './FeedForm';
import FeedList from './FeedList';

var feedNews = [
	{key: 1, title: 'Realtime Data', description: 'Firebase is cool', votecount: 49 },
	{key: 2, title: 'Noel', description: 'Firebase is awesome', votecount: 50 },
	{key: 3, title: 'Joel', description: 'Firebase is high', votecount: 51 }
];

class Feed extends Component {

	constructor(props){
		super(props);
		this.state = {
			news : feedNews,
			formDisplayed : false
		};
		this.onToggleForm = this.onToggleForm.bind(this);
		this.onNewNews = this.onNewNews.bind(this);
		this.onVote = this.onVote.bind(this);
	}

	onToggleForm() {
		console.log("Toggled");
		this.setState({
			formDisplayed: !this.state.formDisplayed
		})
	}

	onNewNews(newItem) {
		newItem.key = this.state.news.length + 1;
		var newNews = this.state.news.concat([newItem]);
		this.setState({
			news : newNews, 
			formDisplayed : false
		});

		console.log(newNews);
	}

	onVote(item) { 
		var updatedNews = this.state.news;
		for(var news in updatedNews){
			if(updatedNews[news].key === item.key){
				updatedNews[news] = item;
			}
		}
		this.setState({
			news: updatedNews
		})
	}

	render() {

		var display = this.state.formDisplayed ? 'none' : 'block';
		var styles = {
			display: display
		}

		return (
			<div className="feed-container">
				
				<ShowAddButton onToggleForm={this.onToggleForm} displayed={this.state.formDisplayed} />
				
				<FeedForm displayed={this.state.formDisplayed} onNewNews={this.onNewNews} onToggleForm={this.onToggleForm}/>
				<br/>
				<br/>

				<FeedList items={this.state.news} onVote={this.onVote}/>
				<a style={styles} className="btn-floating btn-large waves-effect add-new-news" onClick={this.onToggleForm} ><i className="material-icons">edit</i></a>
			</div>
		);
	}
}

export default Feed;

