import React, { PureComponent } from 'react';

// Material UI
import {
	Button,
	Avatar,
	List,
	ListItem,
	ListItemText,
	Typography,
	TextField,
	CircularProgress,
	Paper,
	withStyles
} from '@material-ui/core';

import styles from './styles';

class TableBoard extends PureComponent {
	render() {
		const { classes, data, selectedItem, onClick, isLoading } = this.props;
		const { icon: Icon, labels, children, secondButton } = this.props;
		const listItems =
			data && data.length > 0 ? (
				data.map(item => {
					const { _id, name } = item;
					return (
						<ListItem
							key={_id}
							onClick={() => onClick(item)}
							className={classes.listItem}
						>
							<Avatar className={classes.avatar}>
								<Icon />
							</Avatar>
							<ListItemText
								primary={name}
								secondary="Tipo: Biologico"
								classes={{ root: classes.listItemText }}
							/>
						</ListItem>
					);
				})
			) : (
				<div className={classes.infoContainer}>
					{Icon && <Icon size={56} className={classes.infoEmptyIcon} />}
					<Typography variant="h6" component="h2" className={classes.infoEmpty}>
						{labels.empty.title}
					</Typography>
					<Typography
						variant="body2"
						component="p"
						className={classes.infoSubtitle}
					>
						{labels.empty.subtitle}
					</Typography>
				</div>
			);
		return (
			<Paper className={classes.root}>
				<section className={classes.sideListRoot}>
					{/* Search Box */}
					<div className={classes.searchBox}>
						<TextField
							id="inputSearch"
							className={classes.searchBoxTextField}
							margin="normal"
							placeholder={labels.inputSearchPlaceholder}
						/>
					</div>
					{/* List Items */}
					<List className={classes.list} disablePadding>
						{isLoading ? (
							<div className={classes.infoContainer}>
								<div className={classes.loadingIconContainer}>
									<CircularProgress size={72} />
									{Icon && <Icon size={36} className={classes.loadingIcon} />}
								</div>
								<Typography
									variant="body2"
									component="span"
									className={classes.infoSubtitle}
								>
									Consultando...
								</Typography>
							</div>
						) : (
							listItems
						)}
					</List>
					{/* Buttons */}
					<div className={classes.buttonsContainer}>
						<Button variant="text" color="primary" className={classes.button}>
							{labels.button}
						</Button>
						{secondButton && (
							<Button
								variant="text"
								color="primary"
								className={classes.button}
								onClick={secondButton.onClick}
							>
								{secondButton.title}
							</Button>
						)}
					</div>
				</section>
				{/* Info */}
				{selectedItem !== null ? (
					children
				) : (
					<section className={classes.infoContainer}>
						<Typography
							variant="h6"
							component="h2"
							className={classes.infoTitle}
						>
							{labels.info.title}
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={classes.infoSubtitle}
						>
							{labels.info.subtitle}
						</Typography>
					</section>
				)}
			</Paper>
		);
	}
}

export default withStyles(styles)(TableBoard);