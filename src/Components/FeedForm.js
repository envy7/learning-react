import React, { Component } from 'react';
import '../../public/css/FeedForm.css';

class FeedForm extends Component {

	render() {

		var display = this.props.displayed ? 'block' : 'none';
		var styles = {
			display: display
		}

		return (
			<form style={styles} id="feedForm">
				<div className="form-grp">
					<input type="text" className="form-control" placeholder="title"/>
					<input type="text" className="form-control description" placeholder="description"/>
				</div>
				<a className="btn-floating btn-large waves-effect add-news"><i className="material-icons">add</i></a>
			</form>
		);
	}
}

export default FeedForm;
