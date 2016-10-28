import React, { Component } from 'react';

class ShowAddButton extends Component {
	render() {

		var display = this.props.displayed ? 'block' : 'none';
		var styles = {
			display: display
		}

		return (
			<button style={styles} className='btn btn-default btn-block add-item-btn waves-effect' onClick={this.props.onToggleForm}>Cancel</button>
		);
	}
}

export default ShowAddButton;