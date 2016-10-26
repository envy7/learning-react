import React, { Component } from 'react';

class FeedForm extends Component {
	render() {
		return (
			<form id="feedForm" className="container">
				<div className="form-grp">
					<input type="text" className="form-control" placeholder="title"/>
					<input type="submit" className="form-control" placeholder="description"/>
					<button type="submit" className="btn">Add</button>
				</div>
			</form>
		);
	}
}

export default FeedForm;
