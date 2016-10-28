import React, { Component } from 'react';
import ShowAddButton from './ShowAddButton';
import FeedForm from './FeedForm';
import FeedList from './FeedList';


var firebase = require("firebase");
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyBiE5BPGaeIQUo9bAnBKxU8jhXVvqU6p2M",
  authDomain: "react-news-app.firebaseapp.com",
  databaseURL: "https://react-news-app.firebaseio.com",
  storageBucket: "gs://react-news-app.appspot.com",
};
firebase.initializeApp(config);

var db = firebase.database().ref('news/');

class Feed extends Component {

	constructor(props){
		super(props);
		this.state = {
			news : [],
			formDisplayed : false
		};
		this.onToggleForm = this.onToggleForm.bind(this);
		this.onNewNews = this.onNewNews.bind(this);
		this.onVote = this.onVote.bind(this);
		this.loadData = this.loadData.bind(this);
	}

	loadData(){
		db.on('value', function(snap){
			var items = [];
			snap.forEach(function(itemSnap){
				var item = itemSnap.val();
				item.key = itemSnap.key;
				items.push(item);
			})
			//sort the array of objects according to votecount
			items.sort(function(curr, next){
				return next.votecount-curr.votecount;
			});
			//console.log(items);
			this.setState({
				news : items
			})
		}.bind(this))
	}

	componentDidMount(){
		this.loadData();
	}

	onToggleForm() {
		console.log("Toggled");
		this.setState({
			formDisplayed: !this.state.formDisplayed 
		})
	}

	onNewNews(newItem) {
		db.push(newItem);
	}

	onVote(item) { 
		var dbnews = db.child(item.key);
		dbnews.update(item);
	}

	render() {

		var display = this.state.formDisplayed ? 'none' : 'block';
		var styles = {
			display: display
		}
		
		var displayGif = this.state.news.length ? 'none' : 'block';
		var styleGif = {
			display : displayGif
		}


		return (
			<div className="feed-container">
				
				<ShowAddButton onToggleForm={this.onToggleForm} displayed={this.state.formDisplayed} />
				
				<FeedForm displayed={this.state.formDisplayed} onNewNews={this.onNewNews} onToggleForm={this.onToggleForm}/>
				<br/>
				<br/>
				<img className="loader-gif" style={styleGif} src="http://www.citysearchlocal.com/images/g-dots2.gif" alt="loader-gif"/>
				<FeedList items={this.state.news} onVote={this.onVote}/>
				<a style={styles} className="btn-floating btn-large waves-effect add-new-news" onClick={this.onToggleForm} ><i className="material-icons">edit</i></a>
			</div>
		);
	}
}

export default Feed;

