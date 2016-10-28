import React, { Component } from 'react';

class FeedItem extends Component {
	constructor(props){
		super(props);
		this.onVote = this.onVote.bind(this);
		this.onDownVote = this.onDownVote.bind(this);
		this.onUpVote = this.onUpVote.bind(this);
	}

	onVote(newCount) {
		this.props.onVote({
			title: this.props.title,
			description: this.props.desc,
			votecount: newCount,
			key: this.props.id
		})		
	}

	onUpVote() {
		var newCount = this.props.votecount + 1;
		//console.log(newCount);
		this.onVote(newCount);
	}
	
	onDownVote() {
		var newCount = this.props.votecount - 1;
		//console.log(newCount);
		this.onVote(newCount);
	}

	render() {

		var classText;
		if(this.props.votecount < 0){
			if(this.props.votecount > -10){
				classText = "votecount-nv z-depth-1 extra-pad";
			}
			else{
				classText = "votecount-nv z-depth-1";
			}
		}
		else{
			if(this.props.votecount < 10){
				classText = "votecount-pv z-depth-1 extra-pad";
			}
			else{
				classText = "votecount-pv z-depth-1";
			}
			
		}

		return (
			<li key={this.props.id} className="list-grp row  card-panel ">
				<div className="col l11 m10 s8">
					<div className="row"><h4>{this.props.title}</h4></div>
					<div className="row"><p>{this.props.desc}</p></div>
				</div>
				<div className="col l1 m2 s4">
					<a className="row right-end"><i onClick={this.onUpVote} className="material-icons waves-effect waves-indigo">expand_less</i></a>
					<div className="row right-end"><span className={classText}>{this.props.votecount}</span></div>
					<a className="row right-end"><i onClick={this.onDownVote} className="material-icons waves-effect waves-indigo">expand_more</i></a>
				</div>
			</li>
		);
	}
} 

export default FeedItem;