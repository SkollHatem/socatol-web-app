import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles';

// Material UI Components
import { withStyles } from '@material-ui/core';

// Components
import NavBar from './NavBar';
import SideNav from './SideNav';

// Actions
import { selectTab } from '../../actions/Layout';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mobileOpen: false,
			selectedItem: 0
		};
		this.handleListItemClick = this.handleListItemClick.bind(this);
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
	}

	handleDrawerToggle = () => {
		const { mobileOpen } = this.state;
		this.setState({ mobileOpen: !mobileOpen });
	};

	handleListItemClick = selectedItem => {
		this.setState({ selectedItem });
	};

	render() {
		const { selectedItem, mobileOpen } = this.state;
		const { classes, children, state, actions } = this.props;
		const { title, tabs, tabSelected } = state;
		const { changeTab } = actions;

		return (
			<div className={classes.root}>
				<NavBar
					classes={classes}
					title={title}
					tabs={tabs}
					tabSelected={tabSelected}
					changeTab={changeTab}
					navOpen={this.handleDrawerToggle}
				/>
				<SideNav
					classes={classes}
					selectedItem={selectedItem}
					mobileOpen={mobileOpen}
					handleClick={this.handleListItemClick}
					handleDrawerToggle={this.handleDrawerToggle}
				/>
				<main className={classes.content}>{children}</main>
			</div>
		);
	}
}

const mapStateToProps = ({ Layout }) => ({
	state: { ...Layout }
});

const mapDispatchToProps = dispatch => ({
	actions: {
		changeTab: (e, value) => {
			return dispatch(selectTab(value));
		}
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Layout));
