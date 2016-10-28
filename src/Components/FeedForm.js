import React, { Component } from 'react';
import '../../public/css/FeedForm.css';

class FeedForm extends Component {

	handleForm(e) {
		e.preventDefault();

		//alert(this.title.value);
		
		var newNews = {
			title : this.title.value,
			description : this.desc.value,
			votecount : 0
		};

		console.log(newNews);
		//reset form data
		this.feedForm.reset();

		this.props.onNewNews(newNews);
	}

	render() {

		var display = this.props.displayed ? 'block' : 'none';
		var styles = {
			display: display
		}

		return (
			<form ref={(input) => this.feedForm = input} style={styles} id="feedForm" onSubmit={this.handleForm.bind(this)}>
				<div className="form-grp">
					<div className="row">
						<div className="input-field col s12">
							<input ref={(input) => this.title = input} type="text" className="form-control" id="title"/>
							<label htmlFor="title">Title</label>
						</div>
					</div>
					<div className="row">
					<div className="input-field col s12">
						<textarea ref={(input) => this.desc = input} type="text" className="form-control description materialize-textarea" id="desc"></textarea>
						<label htmlFor="desc">Description</label>
					</div>
					</div>
				</div>
				<button onClick={this.props.onToggleForm} type="submit" className="btn-floating btn-large waves-effect add-news"><i className="material-icons">add</i></button>
			</form>
		);
	}
}

export default FeedForm;
